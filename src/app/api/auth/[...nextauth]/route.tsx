import db from "@/app/libs/prisma"
import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials) return null
                const { email, password } = credentials

                const userFound = await db.user.findUnique({
                    where: {
                        email: email
                    }
                })
                if (!userFound) throw new Error("User not found")

                const matchPassword = await bcrypt.compare(password, userFound.password)
                if (!matchPassword) throw new Error("Wrong password")

                return {
                    id: userFound.id.toString(),
                    email: userFound.email
                }
            }
        })
    ],
    pages: {
        signIn: "/my-account"
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
