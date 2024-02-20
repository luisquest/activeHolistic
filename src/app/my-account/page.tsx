'use client'
import React, { useState } from "react";
import SectionPresentation from "../sections/presentation";
import Link from "next/link";

const Page = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log("form data", formData);
    };
    const RedAsterict = () => {
        return <span className="text-red-500">*</span>
    }


    return (
        <main className="flex flex-col items-center gap-16 pb-16">
            <SectionPresentation title="My Account" subtitle={["My Account"]} />
            <section className="container w-full px-6">
                <div className="flex flex-col gap-5">
                    <h1 className="text-6xl font-bold">Login</h1>
                    <div className="border">
                        <div className="p-6">
                            <form className="">
                                <>
                                    <label htmlFor="username">Username or email address {formData.username === "" && <RedAsterict />}</label>
                                    <input id="username" name="username" type="text"
                                        className="w-full"
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                                <>
                                    <label htmlFor="password">Password {formData.password === "" && <RedAsterict />}</label>
                                    <input id="password" name="password" type="password"
                                        className="w-full"
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                                <>
                                    <button type="submit">Login</button>
                                    <input id="rememberMe" name="rememberMe" type="checkbox"
                                        checked={formData.rememberMe}
                                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    />
                                </>
                            </form>
                        </div>
                        <div className="border border-t-2 p-6">
                            <Link href={"/my-account/lost-password"}>Lost your password?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;