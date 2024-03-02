import db from "@/app/libs/prisma"
import { IUserForm } from "@/app/my-account/iUserProps"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"


async function POST(request: Request) {
    const data: IUserForm = await request.json()

    try {
        const emailUnique = await db.user.findUnique({
            where: {
                email: data.email
            }
        })
        if (emailUnique) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400, }
            )
        }
        const hashedPassword = await bcrypt.hash(data.password, 10)

        const newUser = await db.user.create({
            data: {
                email: data.email,
                password: hashedPassword
            }
        })

        const { password: _, ...user } = newUser

        return NextResponse.json({ user })

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

export { POST }
