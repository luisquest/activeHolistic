"use client";
import CarouselData from "@/app/data/carousel";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3; // Número total de diapositivas

    const carouselData = CarouselData();


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
            {carouselData.map((carousel, index) => (
                <div
                    className={`${index === currentSlide ? "block" : "hidden"} relative w-full`}
                    key={index}
                    data-carousel-item
                >
                    <img
                        src={carousel.imagen}
                        className={`object-cover w-full max-h-screen transition-transform duration-700 scale-${index === currentSlide ? "100" : "95"}`}
                        alt={`Slide ${index + 1}`}
                    />
                    <div className="absolute top-1/2 left-1/2 lg:left-1/3 transform -translate-x-1/2 lg:-translate-x-1/3 -translate-y-1/2 text-white flex flex-col gap-6">
                        {/* Caption */}
                        <div className="text-center lg:text-start">
                            {carousel.caption}
                        </div>
                        {/* Titulo */}
                        <div className="text-7xl text-center lg:text-start font-bold">
                            <span className="text-blue-500">{carousel.tituloResaltado}{" "}</span>
                            {carousel.titulo}

                        </div>
                        {/* Descripcion */}
                        <div className="text-lg text-center lg:text-start mb-5">{carousel.descripcion}</div>

                        <div className="flex justify-center lg:justify-start gap-6 w-full">
                            {/* Botón para redireccionar */}
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-full w-1/3 h-16"
                                onClick={() => redirect(carousel.botonRedirecionar)}
                            >
                                {carousel.botonTexto}
                            </button>
                            {/* Botón para redireccionar */}
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-full w-1/3 h-16"
                                onClick={() => redirect("/contact")}
                            >
                                {'Contáctame →'}
                            </button>
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