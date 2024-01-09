"use client"
import { useEffect, useState } from 'react';

const Carrousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3; // Número total de diapositivas

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
        <div id="default-carousel" className="w-full max-h-min" data-carousel="slide">
            {/* Contenido del carrusel (imágenes) */}
            {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                    className={`${index === currentSlide ? 'block' : 'hidden'}`}
                    key={index}
                    data-carousel-item
                >
                    <img
                        src={`https://flowbite.com/docs/images/carousel/carousel-${index + 1}.svg`}
                        className={`relative block object-cover w-full h-full transition-transform duration-700 scale-${index === currentSlide ? '100' : '95'}`}
                        alt={`Slide ${index + 1}`}
                    />
                    <div className='absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                        {/* Texto encima de la imagen */}
                        <div>
                            <h2 className="text-4xl font-bold mb-2">Título Slide {index + 1}</h2>
                            <p className="text-lg">Descripción o cualquier otro texto</p>
                        </div>
                        {/* Botón encima de la imagen */}
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={() => handleSlideClick(index)}
                        >
                            Ver más
                        </button>
                    </div>
                </div>
            ))}

            {/* Botones de navegación en el lateral derecho */}
            <div className="absolute z-30 flex flex-col gap-6 items-end justify-center top-1/2 transform -translate-y-1/2 right-5 space-y-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-current={index === currentSlide}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => handleSlideClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carrousel;
