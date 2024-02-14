import Image from "next/image";
import Link from "next/link";

const SectionAboutUs = () => {
    return (
        <section className="self-center">
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-14 items-center lg:justify-center py-4">
                    <div className="flex gap-4 justify-center items-end">
                        <Image src="/assets/images/photos/pasillo_blanco.jpg" alt="imagen 1" width={230} height={318} className="hidden md:block" />
                        <Image src="/assets/images/photos/protesis_pierna.jpg" alt="imagen 2" width={315} height={439} />
                    </div>
                    <div className="flex flex-col gap-6 justify-center items-center text-center">
                        <div className="text-center">
                            <h6 className="text-xs md:text-base font-semibold">Sobre Nosotros</h6>
                            <h2 className="text-4xl md:text-6xl font-bold mt-3">
                                Active<br />Holistic
                            </h2>
                            <h5 className="text-md md:text-lg font-bold mt-3">Vivir mejor</h5>
                        </div>

                        <div className="max-w-[480px]">Somos una clínica de Osteopatía y fisioterapia distinta ¿Por qué? pues el éxito de nuestros tratamientos se basa en encontrar el origen de tu problema y no sólo aliviar tus síntomas, sino resolverlo por completo, evitando que tengas tratamientos eternos.</div>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-5">
                            <Link href={'/about-us'} className="rounded-full px-14 py-5 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative transition duration-300 group-hover:text-white ease">Más infor →</span>
                            </Link>
                            <button className="flex gap-2 justify-center items-center self-center px-4 h-6 ">
                                <span className="bg-blue-100 p-4 rounded-full"><Image src="/assets/icons/phone.svg"
                                    alt="Menu"
                                    width={27}
                                    height={34}
                                    priority />
                                </span>+51 965 836 372</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionAboutUs;