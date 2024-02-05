import Image from "next/image";
import Link from "next/link";
import SendIcon from "../icons/send";
import YoutubeIcon from "../icons/youtube";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TwitterIcon from "../icons/twitter";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col bg-blue-950 pt-16">
                <div className="container w-screen self-center">
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-10 p-8">
                        {/* IZQUIERDA */}
                        <div className="flex flex-col gap-10 w-full md:w-1/2 lg:w-2/5">
                            <Image src="/assets/images/logo/logo-light.png"
                                alt="Menu"
                                width={170}
                                height={38}
                                priority
                            />
                            <div className="text-sm text-white">
                                Cybron is a cutting-edge prosthetic robotic company dedicated to revolutionizing the way.
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-red-300 p-4 rounded-full">
                                    <Image src="/assets/icons/phone.svg"
                                        alt="Menu"
                                        width={15}
                                        height={22}
                                        priority
                                    />
                                </span>
                                <div className="font-bold">
                                    <span className="text-xl text-white">0 (550) 680-34-12</span>
                                    <br />
                                    <span className="text-md text-blue-700">Round-the-clock</span>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <a href="https://www.youtube.com" target="blank"><YoutubeIcon className="text-blue-500" /></a>
                                <a href="https://www.facebook.com" target="blank"><FacebookIcon className="text-blue-500" /></a>
                                <a href="https://www.instagram.com" target="blank"><InstagramIcon className="text-blue-500" /></a>
                                <a href="https://www.twitter.com" target="blank"><TwitterIcon className="text-blue-500" /> </a>
                            </div>
                        </div>
                        {/* CENTRO */}
                        <div className="hidden lg:block px-6 lg:w-2/5">
                            <div className="text-2xl font-bold mb-8 text-blue-500">Explore</div>
                            <div>
                                <ul className="grid grid-cols-2 gap-8 text-sm font-bold text-white">
                                    <li><Link href={"/"} className="w-1/2 hover:text-blue-800" ><span className="text-blue-800 mr-1">&rsaquo;</span>Home</Link></li>
                                    <li><Link href={"/about-us"} className="w-1/2 hover:text-blue-800" ><span className="text-blue-800 mr-1">&rsaquo;</span>About Us</Link></li>
                                    <li><Link href={"/contact"} className="w-1/2 hover:text-blue-800" ><span className="text-blue-800 mr-1">&rsaquo;</span>Contactar</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* DERECHA */}
                        <div className="w-full md:w-1/2 lg:w-2/5">
                            <div className="text-2xl font-bold mb-8 text-blue-500">Suscribe</div>
                            <div className="relative mb-4 max-w-96">
                                <div className="relative flex items-center border rounded-full ">
                                    <input
                                        type="text"
                                        placeholder="Escribe algo..."
                                        className="p-4 rounded-full focus:outline-none focus:border-blue-500 flex-1"
                                    />
                                    <span className="absolute right-0 flex items-center pr-0.5">
                                        <SendIcon width="54px" height="54px"
                                            className="p-3 bg-blue-300 rounded-full hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue hover:stroke-white" />
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" value="suscribed" name="suscribed" />
                                <label htmlFor="suscribed" className="ml-2 text-sm text-white">I authorize the use of the information entered</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 border-t-2 border-gray-400">
                    <div className="flex flex-col items-center">
                        <div className="container w-screen text-white text-center"><span className="text-blue-400">Like-themes</span> © All Rights Reserved - 2022 - <span className="text-blue-400">Purchase</span></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;