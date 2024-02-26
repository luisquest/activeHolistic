'use client'
import { FormEvent, useEffect, useState } from "react"
import NewsLetterIcon from "../components/icons/newsltetter"

const SectionSuscribeNow = () => {
    const [formData, setFormData] = useState({
        subject: "Suscripción de correo",
        email: "",
        type: "SF"
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const [canSubmit, setCanSubmit] = useState(true)

    useEffect(() => {
        const lastSubmissionTime = localStorage.getItem("lastSubmissionTime")
        if (lastSubmissionTime) {
            const fiveMinutesAgo = Date.now() - 5 * 60 * 1000
            setCanSubmit(parseInt(lastSubmissionTime) < fiveMinutesAgo)
        }
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const lastSubmissionTime = localStorage.getItem("lastSubmissionTime")
        if (lastSubmissionTime) {
            const fiveMinutesAgo = Date.now() - 5 * 60 * 1000
            setCanSubmit(parseInt(lastSubmissionTime) < fiveMinutesAgo)
        }
        if (!canSubmit) {
            return alert("Please wait 5 minutes before submitting another message.")
        }

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            // Update last submission time in localStorage
            localStorage.setItem("lastSubmissionTime", Date.now().toString())

            // Set a timeout to allow submissions after 5 minutes
            setTimeout(() => {
                setCanSubmit(true)
            }, 5 * 60 * 1000)
        } catch (error) {
            console.error("Error sending message:", error)
        }
    }


    return (
        <section className="bg-cyan-500 flex justify-center items-center min-h-28">
            <div className="container flex justify-center">
                <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center justify-center py-10 md:py-16 w-full max-w-[1000px]">
                    <NewsLetterIcon width="100px" height="120px" className="text-cyan-950" />
                    <div className="md:w-2/6 text-3xl font-bold text-cyan-950 tracking-tighter">
                        Subscribe now
                        <br />
                        <span className="text-white">to our newletter</span>
                    </div>
                    <div className="w-full mt-8 md:mt-0">
                        <div className="relative">
                            <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-center rounded-full mx-6 md:mx-0">
                                <input
                                    id="email" name="email"
                                    type="text"
                                    placeholder="Your Email ..."
                                    className="p-4 rounded-full focus:outline-none focus:border-blue-500 flex-1 h-16 w-full"
                                    onChange={handleChange}
                                    minLength={5}
                                    required
                                />
                                <span className="md:absolute right-0 flex items-center">
                                    <div className="md:col-span-3">
                                        <button type="submit"
                                            className={`rounded-full px-12 md:px-24 py-4 overflow-hidden relative group cursor-pointer font-medium h-16 
                                            ${canSubmit ? 'bg-cyan-950 hover:bg-white transition-all duration-700 text-white' : 'bg-white text-cyan-950'}`}
                                            disabled={!canSubmit}>
                                            <span className="relative transition duration-300 group-hover:text-cyan-700 ease text-md font-bold">Suscribe →</span>
                                        </button>
                                    </div>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SectionSuscribeNow