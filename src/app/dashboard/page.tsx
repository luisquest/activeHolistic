"use client"
import { signOut } from "next-auth/react"

const Page = async () => {
    return (
        <div>
            <div>Page123</div>
            <button
                onClick={() => signOut()}
            >Logout</button>
        </div>
    )
}

export default Page