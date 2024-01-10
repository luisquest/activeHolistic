'use client'
import Image from "next/image";
import { useEffect, useState } from "react";



const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) { // Tamaño MD en píxeles
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

    return (
        <header>
            <div className="relative">
                <div className={`${openMenu ? 'hidden' : ''}`}>
                    {/* TOP TABLET */}
                    <div className="hidden md:flex flex-col lg:flex-row items-center lg:justify-around border-b-2 border-gray-200 py-2">
                        <div className="flex flex-row gap-8 ">
                            <div>support@cybron-systems.com</div>
                            <div>13 Division st, New York, 16004</div>
                            <div>+1 800 777 000</div>
                        </div>
                        <div className="hidden lg:flex flex-row gap-8 ">
                            <div>AA</div>
                            <div>BB <span>+99</span></div>
                            <div>CC</div>
                        </div>
                    </div>
                    <div className={`relative flex flex-row gap-4 justify-center py-4 min-h-24`}>
                        <div className="self-center">
                            <Image src="/assets/images/logo/logo.png"
                                alt="Cybron WordPress Theme"
                                sizes="100vw"
                                width={170}
                                height={38}
                            />
                        </div>

                        <button className="absolute lg:hidden right-6 top-1/4 translate-y-1/2"
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

                {/* MENU OPEN */}
                {openMenu &&
                    <div className="fixed z-10 bg-blue-950 min-h-screen min-w-full p-4">
                        <div className={`relative flex-row gap-4 justify-center py-4 min-h-24`}>
                            <div className="flex items-center justify-center">
                                <Image src="/assets/images/logo/logo-light.png"
                                    alt="Cybron WordPress Theme"
                                    sizes="100vw"
                                    width={170}
                                    height={38}
                                />
                            </div>

                            <button className="absolute lg:hidden right-3 top-4"
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                <Image src="/assets/icons/x.svg"
                                    alt="Menu"
                                    width={27}
                                    height={34}
                                    priority
                                />
                            </button>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;