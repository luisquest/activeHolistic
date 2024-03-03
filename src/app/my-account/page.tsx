'use client'
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import SectionLogin from "../sections/auth/login"
import SectionPresentation from "../sections/presentation"
import SectionSkeleton from "../sections/skeleton/skeleton"

const Page = () => {
    const { status, data } = useSession()
    const [sessionChecked, setSessionChecked] = useState(false)

    useEffect(() => {
        console.log(status, data)
        if (!sessionChecked && status !== "loading") {
            setSessionChecked(true)
        }
    }, [sessionChecked, status])

    if (sessionChecked) {
        if (status === "authenticated")
            return <main className="flex flex-col items-center gap-16 pb-16" >
                <SectionPresentation title="My Account" subtitle={["My Account"]} />
                <section>
                    <div>{data?.user?.email}</div>
                    <button
                        onClick={() => signOut()}
                    >Logout</button>
                </section>
            </main >

        if (status === "unauthenticated") {
            return <main className="flex flex-col items-center gap-16">
                <SectionPresentation title="My Account" subtitle={["My Account"]} />
                <SectionLogin />
            </main>
        }
    }

    return <SectionSkeleton />
}

export default Page