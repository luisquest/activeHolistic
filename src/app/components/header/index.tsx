'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const pathname = usePathname()

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) { // Tamaño MD en píxeles
                setOpenMenu(false);
            }
        };

        // Agrega el listener para el evento resize
        window.addEventListener('resize', handleResize);

        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Se ejecuta solo al montar el componente

    const active = "text-blue-500";

    return (
        <header>
            <div className={`${openMenu ? 'hidden' : ''}`}>
                {/* TOP TABLET */}
                <div className={`relative hidden md:flex md:justify-center md:items-center md:border-b-2 md:border-gray-200 md:py-2`}>
                    <div className="container md:flex md:flex-col lg:flex-row items-center lg:justify-between px-7 lg:px-0">
                        <div className="flex flex-row gap-8 text-xs">
                            <div>citas@activeholistic.pe</div>
                            <div>av. Mariscal La Mar 550, Oficina 204, Miraflores </div>
                            <div>+51 965 836 372  </div>
                        </div>
                        <div className="hidden lg:flex gap-8 ">
                            <div>FB</div>
                            <div>IN <span></span></div>
                            <div>LN</div>
                        </div>
                    </div>
                </div>
                <div className={`${isFixed ? 'fixed top-0 w-full bg-white shadow-md z-10' : 'relative'} flex justify-center items-center py-4 min-h-24`}>
                    <div className="container flex justify-between items-center px-7 lg:px-0 ">
                        <div className="w-full flex justify-center lg:w-auto lg:block lg:justify-normal">
                            <Link href={"/"}>
                                <Image src="/assets/images/logo/logo.png"
                                    alt=""
                                    sizes="100vw"
                                    width={170}
                                    height={38}
                                />
                            </Link>
                        </div>
                        <nav className="hidden lg:block">
                            <ul className="flex gap-12 text-md font-bold">
                                <li> <Link href={"/"} className={`${pathname === '/' ? active : 'hover:text-blue-500'}`}>{"Inicio >"}</Link></li>
                                <li> <Link href={"/about-us"} className={`${pathname === '/about-us' ? active : 'hover:text-blue-500'}`} >{"Servicios >"}</Link></li>
                                {/* <li> <Link href={"/products"} className={`${pathname === '/products' ? active : 'hover:text-blue-500'}`}>{"Products >"}</Link></li> */}
                                <li> <Link href={"/contact"} className={`${pathname === '/contact' ? active : 'hover:text-blue-500'}`}>{"Contacto >"}</Link></li>
                            </ul>
                        </nav>
                        <div className="hidden lg:block">
                            <button className="rounded-full px-8 py-3 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                                <span className="absolute w-96 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-24 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative transition duration-300 group-hover:text-white ease">Solicitar una cita →</span>
                            </button>
                        </div>
                        {/* OPEN MENU */}
                        <button className="lg:hidden"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <Image src="/assets/icons/menu.svg"
                                alt="Close Menu"
                                width={27}
                                height={34}
                                priority
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* MENU */}
            {openMenu &&
                <div className="fixed z-10 bg-blue-950 min-h-screen min-w-full p-4">
                    {/* UPPER */}
                    <div className={`relative flex-row gap-4 justify-center py-4 min-h-24`}>
                        {/* LOGO */}
                        <div className="flex items-center justify-center">
                            <Image src="/assets/images/logo/logo-light.png"
                                alt=""
                                sizes="100vw"
                                width={170}
                                height={38}
                            />
                        </div>
                        {/* CLOSE */}
                        <button className="absolute lg:hidden right-3 top-4"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <Image src="/assets/icons/x.svg"
                                alt="Menu"
                                width={40}
                                height={40}
                                priority
                            />
                        </button>
                    </div>
                    {/*  LOWER - NAV MOBILE */}
                    <nav className="p-10">
                        <ul className="flex flex-col gap-12 text-xl font-bold text-white">
                            <li>
                                <Link href={"/"} className={`flex justify-between ${pathname === '/' ? active : 'hover:text-blue-500'}`}>
                                    <span> {"Inicio"}</span><span>+</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/about-us"} className={`flex justify-between ${pathname === '/about-us' ? active : 'hover:text-blue-500'}`}>
                                    <span>{"Servicios"}</span><span>+</span>
                                </Link>
                            </li>
                            {/*  <li>
                                    <Link href={"/products"} className={`flex justify-between ${pathname === '/products' ? active : 'hover:text-blue-500'}`}>
                                        <span>{"Products"}</span><span>+</span>
                                    </Link>
                                </li> */}
                            <li>
                                <Link href={"/contact"} className={`flex justify-between ${pathname === '/contact' ? active : 'hover:text-blue-500'}`}>
                                    <span>{"Contacto"}</span><span>+</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </header>
    );
}

export default Header;