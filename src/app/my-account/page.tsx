'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
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
            return <main className="flex flex-col items-center gap-16">
                <SectionPresentation title="My Account" subtitle={["My Account"]} />
                <section className="container w-full px-4 pt-9 pb-24">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-6xl font-bold mt-14 mb-4">Login</h1>
                        <div className="border">
                            <div className="p-6">
                                {restError && <h1 className="text-red-500 text-lg">{restError}</h1>}
                                <form onSubmit={onSubmit} className="flex flex-col gap-4 text-lg">
                                    <div>
                                        <label htmlFor="email" className="text-sm">Username or email address {errors.email?.type === "required" && <RedAsterict />}</label>
                                        <div className="px-5 py-[18px]">
                                            <input type="email"
                                                className="w-full outline-none text-base"
                                                placeholder="example@email.com"
                                                autoComplete="email"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "Email is required"
                                                    }
                                                })}
                                            />
                                            {errors.email && (<span className="text-red-500 text-base">
                                                {errors.email?.message as string}
                                            </span>)}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="text-sm">Password {errors.password?.type === "required" && <RedAsterict />}</label>
                                        <div className="px-5 py-[18px]">
                                            <input type="password"
                                                className="w-full outline-none text-base"
                                                autoComplete="current-password"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: "Password is required"
                                                    }
                                                })}
                                            />
                                            {errors.password && (<span className="text-red-500 text-base">
                                                {errors.password?.message as string}
                                            </span>)}</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button type="submit">Login</button>
                                        <div className="flex items-center gap-3 text-sm">
                                            <input id="rememberMe" type="checkbox" className="hover:cursor-pointer"
                                                {...register("rememberMe")}
                                            />
                                            <label htmlFor="rememberMe" className="hover:cursor-pointer">Remember me</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="border-t p-6">
                                <Link href={"/my-account/register"} className="hover:text-blue-800">New User?</Link>
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