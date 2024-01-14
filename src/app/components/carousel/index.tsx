"use client";
import CarouselData from "@/app/data/carousel";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = CarouselData.length; // Número total de diapositivas

    const handleSlideClick = (index: number) => {
        setCurrentSlide(index);
    };

    // Cambio automático cada 1.5 segundos (ajusta el intervalo según tus necesidades)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextSlide = (currentSlide + 1) % totalSlides;
            setCurrentSlide(nextSlide);
        }, 1500); // Cambio cada 1.5 segundos

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [currentSlide, totalSlides]);

    return (
        <div id="default-carousel" className="relative" data-carousel="slide">
            {/* Contenido del carrusel (imágenes) */}
            {CarouselData.map((carousel, index) => (
                <div
                    className={`${index === currentSlide ? "block" : "hidden"} relative w-full min-h-screen`}
                    key={index}
                    data-carousel-item
                    style={{
                        backgroundImage: `url(${carousel.imagen})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 lg:left-[20%] transform -translate-x-1/2 lg:-translate-x-1/3 -translate-y-1/2 text-white flex flex-col gap-6">
                        <div className="relative w-full max-w-md flex flex-col gap-8">
                            {/* Caption */}
                            <div className="text-center lg:text-start">
                                {carousel.caption}
                            </div>
                            {/* Titulo */}
                            <div className="text-3xl md:text-7xl text-center lg:text-start font-bold ">
                                <span className="text-blue-500">
                                    {carousel.tituloResaltado} <br />
                                </span>
                                {carousel.titulo}
                            </div>
                            {/* Descripcion */}
                            <div className="text-md lg:text-lg text-center lg:text-start mb-5">{carousel.descripcion}</div>

                            <div className="flex flex-col md:flex-row items-center lg:justify-start gap-5 w-full">
                                {/* Botón para redireccionar */}
                                <button className="rounded-full w-full h-12 md:h-16 px-6 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative transition duration-300 group-hover:text-white ease" onClick={() => redirect(carousel.botonRedirecionar)}> {carousel.botonTexto}</span>
                                </button>
                                {/* Botón para redireccionar */}
                                <button className="rounded-full w-full h-12 md:h-16 px-6 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-blue-500 text-blue-950">
                                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-90 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative transition duration-300 group-hover:text-white ease" onClick={() => redirect("/contact")}>{'Contáctame →'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Botones de navegación en el lateral derecho */}
            <div className="absolute flex flex-col gap-6 items-center justify-center top-1/2 transform -translate-y-1/2 right-5 md:right-20 space-y-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${index === currentSlide ? "flex border-2 rounded-full size-6 items-center justify-center" : ""}`}
                        aria-current={index === currentSlide}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => handleSlideClick(index)}
                    ><div className={`w-1.5 h-1.5 rounded-full bg-gray-300 ${index === currentSlide ? "" : "hover:bg-blue-500 hover:size-3"}`}></div></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;