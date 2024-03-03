'use client'
import SectionRegister from "@/app/sections/auth/register"
import SectionPresentation from "@/app/sections/presentation"
import SectionSkeleton from "@/app/sections/skeleton/skeleton"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const Page = () => {
    const { status } = useSession()
    const router = useRouter()
    const [sessionChecked, setSessionChecked] = useState(false)

    useEffect(() => {
        if (sessionChecked && status === "authenticated") {
            router.push("/")
        }
    }, [sessionChecked, status, router])

    useEffect(() => {
        if (!sessionChecked && status !== "loading") {
            setSessionChecked(true)
        }
    }, [sessionChecked, status])

    if (sessionChecked) {
        return <main className="flex flex-col items-center gap-16 pb-16">
            <SectionPresentation title="My Account" subtitle={["My Account"]} />
            <SectionRegister />
        </main>
    }

    return (
        <SectionSkeleton />
    )
}

export default Page