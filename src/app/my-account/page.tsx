'use client'
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import SectionLogin from "../sections/auth/login"
import SectionUser from "../sections/auth/user"
import SectionPresentation from "../sections/presentation"
import SectionSkeleton from "../sections/skeleton/skeleton"

const Page = () => {
    const { status } = useSession()
    const [sessionChecked, setSessionChecked] = useState(false)

    useEffect(() => {
        if (!sessionChecked && status !== "loading") {
            setSessionChecked(true)
        }
    }, [sessionChecked, status])

    if (sessionChecked) {
        return (
            <main className="flex flex-col items-center gap-16 pb-16">
                <SectionPresentation title="Mi cuenta" subtitle={["Mi cuenta"]} />
                {status === "authenticated" && (
                    <SectionUser />
                )}
                {status === "unauthenticated" && (
                    <SectionLogin />
                )}
            </main>
        );
    }

    return <SectionSkeleton />
}

export default Page