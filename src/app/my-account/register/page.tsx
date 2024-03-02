'use client'
import SectionPresentation from "@/app/sections/presentation"
import SectionSkeleton from "@/app/sections/skeleton/skeleton"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"


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

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [restError, setRestError] = useState("")

    const RedAsterict = () => {
        return <span className="text-red-500">*</span>
    }

    const onSubmit = handleSubmit(async data => {
        const rest = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (rest.ok) {
            router.push("/")
        } else {
            setRestError("Error de registro")
        }
    })

    if (sessionChecked) {
        return <main className="flex flex-col items-center gap-16 pb-16">
            <SectionPresentation title="My Account" subtitle={["My Account"]} />
            <section className="container w-full px-6">
                <div className="flex flex-col gap-5">
                    <h1 className="text-6xl font-bold">Register</h1>
                    <div className="border">
                        <div className="p-6">
                            {restError && <h1 className="text-red-500 text-lg">{restError}</h1>}
                            <form onSubmit={onSubmit} className="flex flex-col gap-4 text-lg">
                                <div>
                                    <label htmlFor="email">Email address {errors.email != null && <RedAsterict />}</label>
                                    <input type="email" autoComplete="email"
                                        className="w-full outline-none"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            }
                                        })}
                                    />
                                    {errors.email && (<span className="text-red-500">
                                        {errors.email?.message as string}
                                    </span>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password">Password {errors.password != null && <RedAsterict />}</label>
                                    <input id="password" type="password" autoComplete="new-password"
                                        className="w-full outline-none"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            }
                                        })}
                                    />
                                    {errors.password && (<span className="text-red-500">
                                        {errors.password?.message as string}
                                    </span>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirm Password {errors.confirmPassword != null && <RedAsterict />}</label>
                                    <input id="confirmPassword" type="password" autoComplete="new-password"
                                        className="w-full outline-none"
                                        {...register("confirmPassword", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            }
                                        })}
                                    />
                                    {errors.confirmPassword && (<span className="text-red-500">
                                        {errors.confirmPassword?.message as string}
                                    </span>
                                    )}
                                </div>
                                <div>
                                    <button type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="border border-t-2 p-6">
                            <Link href={"/my-account"}>Already register?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    }
    return (
        <SectionSkeleton />
    )
}

export default Page