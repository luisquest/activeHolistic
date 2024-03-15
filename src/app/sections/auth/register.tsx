import RedAsterict from "@/app/components/input/redAsterict"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SectionRegister = () => {
    const router = useRouter()

    const { register, watch, handleSubmit, formState: { errors } } = useForm()

    const [restError, setRestError] = useState("")

    const onSubmit = handleSubmit(async data => {
        if (data.password != data.confirmPassword) {
            return setRestError("Password don't matched")
        }

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

    return (
        <section className="container w-full px-4 pt-9 pb-24">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold mt-14 mb-4">Registro</h1>
                <div className="border">
                    <div className="p-6">
                        {restError && <h1 className="w-full p-2 mb-3 text-white text-lg border border-red-700 bg-red-600 rounded-md">{restError}</h1>}
                        <form onSubmit={onSubmit} className="flex flex-col gap-4 text-lg">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm">Correo electrónico{<RedAsterict active={watch("email") === ""} />}</label>
                                <input type="email" autoComplete="email"
                                    className="w-full outline-none text-md"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "La correo electrónico es requerida"
                                        }
                                    })} />
                                {errors.email && (<span className="text-red-500 text-base">
                                    {errors.email?.message as string}
                                </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="text-sm">Contraseña{<RedAsterict active={watch("password") === ""} />}</label>
                                <input id="password" type="password" autoComplete="new-password"
                                    className="w-full outline-none text-md" autoFocus
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "La contraseña es requerida"
                                        }
                                    })} />
                                {errors.password && (<span className="text-red-500 text-base">
                                    {errors.password?.message as string}
                                </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="confirmPassword" className="text-sm">Contraseña confirmada{<RedAsterict active={watch("confirmPassword") === ""} />}</label>
                                <input id="confirmPassword" type="password" autoComplete="new-password"
                                    className="w-full outline-none text-md" autoFocus
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: "La contraseña confirmada es requerida"
                                        }
                                    })} />
                                {errors.confirmPassword && (<span className="text-red-500 text-base">
                                    {errors.confirmPassword?.message as string}
                                </span>
                                )}
                            </div>
                            <div>
                                <button type="submit" className="min-w-[180px] px-7 py-3 text-center text-black hover:text-white rounded-full bg-blue-700">Registrarse</button>
                            </div>
                        </form>
                    </div>
                    <div className="border border-t-2 p-6">
                        <Link href={"/my-account"}>¿Ya estás registrado?</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionRegister;