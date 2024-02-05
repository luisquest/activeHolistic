import React from "react";
import ZoomCardsData from "../data/zoomCards";

const SectionZoomCards = () => {
    return (
        <section>
            <div className="flex flex-wrap lg:flex-nowrap gap-y-4 relative">
                {ZoomCardsData.map((zoomCard, i) => (
                    <div key={i} className="relative group w-full md:w-1/2 lg:w-1/4 h- h-[670px] overflow-hidden">
                        <img src={zoomCard.image} className="absolute object-cover size-full transition-transform transform group-hover:scale-125" />
                        <div className="absolute max-w-full bottom-0 text-center text-white px-8 py-12 w-full transition-transform transform group-hover:translate-y-0 duration-700 ease-in-out">
                            <div className="text-sm font-bold">{zoomCard.caption}</div>
                            <div className="text-3xl font-bold">{zoomCard.title}</div>
                            <div className="hidden group-hover:block">{zoomCard.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionZoomCards;