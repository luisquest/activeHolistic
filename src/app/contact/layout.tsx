import { Metadata } from "next"
import Footer from "../components/footer/footer"
import Header from "../components/header"

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Generated by create next app',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}