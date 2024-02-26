'use client'
import React, { useEffect, useState } from "react"
import SectionPresentation from "../sections/presentation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
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

    const [restError, setRestError] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm()

    const RedAsterict = () => {
        return <span className="text-red-500">*</span>
    }

    const onSubmit = handleSubmit(async data => {
        const rest = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })
        if (rest?.error) {
            setRestError(rest.error)
        } else {
            alert("OK")
        }
    })

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
            return <main className="flex flex-col items-center gap-16 pb-16">
                <SectionPresentation title="My Account" subtitle={["My Account"]} />
                <section className="container w-full px-6">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-6xl font-bold">Login</h1>
                        <div className="border">
                            <div className="p-6">
                                {restError && <h1 className="text-red-500 text-lg">{restError}</h1>}
                                <form onSubmit={onSubmit} className="flex flex-col gap-4 text-lg">
                                    <div>
                                        <label htmlFor="email">Username or email address {errors.email?.type === "required" && <RedAsterict />}</label>
                                        <input type="email"
                                            className="w-full outline-none"
                                            placeholder="example@email.com"
                                            autoComplete="email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required"
                                                }
                                            })}
                                        />
                                        {errors.email && (<span className="text-red-500">
                                            {errors.email?.message as string}
                                        </span>)}
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password {errors.password?.type === "required" && <RedAsterict />}</label>
                                        <input type="password"
                                            className="w-full outline-none"
                                            autoComplete="current-password"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required"
                                                }
                                            })}
                                        />
                                        {errors.password && (<span className="text-red-500">
                                            {errors.password?.message as string}
                                        </span>)}
                                    </div>
                                    <div className="flex gap-4">
                                        <button type="submit">Login</button>
                                        <input id="rememberMe" type="checkbox"
                                            {...register("rememberMe")}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="border border-t-2 p-6">
                                <Link href={"/my-account/register"}>New User?</Link>
                                {/* <Link href={"/my-account/lost-password"}>Lost your password?</Link> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        }
    }

    return <SectionSkeleton />
}

export default Page