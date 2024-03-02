"use client"
import { FormEvent, useEffect, useState } from "react"

const SectionFormContact = () => {
    const [formData, setFormData] = useState({
        subject: "",
        name: "",
        email: "",
        message: "",
        type: "CF"
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
        <section className="self-center">
            <div className="container">
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center p-6 md:p-12 lg:p-16 bg-gray-300">
                    <h1 className="text-2xl font-bold">Send Message</h1>
                    <div>Fill out this form, and our specialists will contact you shortly for a detailed consultation.</div>
                    <input
                        className="shadow appearance-none border rounded-full w-full py-4 px-3 text-gray-700 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject" name="subject" onChange={handleChange} placeholder="Subject"
                    />
                    <div className="flex gap-4 w-full">
                        <input
                            className="shadow appearance-none border rounded-full w-full py-4 px-3 text-gray-700 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" name="name" type="text" placeholder="Your name" onChange={handleChange}
                        />
                        <input
                            className="shadow appearance-none border rounded-full w-full py-4 px-3 text-gray-700 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" name="email" type="email" placeholder="Your email" onChange={handleChange}
                        />
                    </div>
                    <textarea
                        className="shadow-sm focus:ring-indigo-500 focus:border-blue-500 mt-1 block w-full py-4 px-3 border-gray-300 rounded-md outline-none"
                        id="message" name="message" rows={3} placeholder="Message" onChange={handleChange}
                    ></textarea>
                    <button
                        className={`rounded-full px-16 py-5 m-1 overflow-hidden relative group cursor-pointer font-medium 
                        ${canSubmit ? 'bg-blue-500 text-blue-950' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                        type="submit"
                        disabled={!canSubmit}
                    >
                        <span className={`${canSubmit ? 'absolute w-56 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease' : 'text-gray-500'}`}></span>
                        <span className={`relative transition duration-300 group-hover:text-white ease 
                        ${canSubmit ? '' : 'text-gray-500'}`}
                        >
                            Enviar
                        </span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default SectionFormContact