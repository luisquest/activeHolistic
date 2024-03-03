import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SectionLogin = () => {
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

    return (
        <section className="container w-full px-4 pt-9 pb-24">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold mt-14 mb-4">Login</h1>
                <div className="border">
                    <div className="p-6">
                        {restError && <h1 className="w-full p-2 mb-3  text-white text-lg border border-red-700 bg-red-600 rounded-md">{restError}</h1>}
                        <form onSubmit={onSubmit} className="flex flex-col gap-4 text-lg">
                            <div className="flex flex-col gap-4">
                                <label htmlFor="email" className="text-sm">Username or email address {errors.email?.type === "required" && <RedAsterict />}</label>
                                <div className="px-5 py-[18px]">
                                    <input type="email"
                                        className="w-full outline-none text-md border focus:border-blue-300"
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
                            <div className="flex flex-col gap-4">
                                <label htmlFor="password" className="text-sm">Password {errors.password?.type === "required" && <RedAsterict />}</label>
                                <div className="px-5 py-[18px]">
                                    <input type="password"
                                        className="w-full outline-none text-md border focus:border-blue-300"
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
                                <button type="submit" className="min-w-[180px] px-7 py-3 text-center text-black hover:text-white rounded-full bg-blue-700">Log In</button>
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
    );
}

export default SectionLogin;