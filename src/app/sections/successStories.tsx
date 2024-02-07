'use client'
import React, { useEffect, useState } from "react";
import ISuccessStorie from "../data/interfaces/isuccessStorie";
import SuccessStoriesData from "../data/successStories";

const SectionSuccessStories = () => {
    const [currentStorie, setCurrentStorie] = useState(0);
    const [disabledPrev, setDisabledPrev] = useState(false);
    const [disabledNext, setDisabledNext] = useState(false);
    const storiesCount = SuccessStoriesData.length;

    useEffect(() => {
        setDisabledPrev(currentStorie === 0);
        setDisabledNext(currentStorie === storiesCount - 1);
    }, [currentStorie]);

    const previusStorie = () => {
        setCurrentStorie((prev) => (prev - 1 + SuccessStoriesData.length) % SuccessStoriesData.length);
    }

    const nextStorie = () => {
        setCurrentStorie((prev) => (prev + 1) % SuccessStoriesData.length);
    }

    const SuccessStorie: React.FC<ISuccessStorie> = (({ storie, avatar, name }) => {
        return (
            <div className="flex flex-col gap-8 px-4 md:px-14 md:py-5 md:mt-10">
                <p className="text-lg leading-9	 tracking-normal italic font-normal text-[#1d2939] py-5 mt-8 mx-auto md:max-w-[560px]">{storie}</p>
                <div className="flex flex-col items-center md:mt-12">
                    <img className="size-[70px] rounded-full" alt="woman with protesis" src={avatar} />
                    <div className="text-lg my-3">{name}</div>
                </div>
            </div>
        );
    });

    return (
        <section>
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-center bg-blue-200">
                <div className="flex flex-col gap-4 text-center py-20">
                    <div className="text-xs">PATIENTS SAY</div>
                    <div className="text-3xl md:text-5xl xl:text-6xl font-semibold">Success Stories</div>
                    <div className="overflow-hidden relative" >
                        <div className={`flex transition ease-out duration-500 sm:mx-8`}
                            style={{ transform: `translateX(-${currentStorie * 100}%)` }}>
                            {SuccessStoriesData.map((ss, i) => {
                                return (
                                    <div key={i} className="min-w-full">
                                        <SuccessStorie storie={ss.storie} avatar={ss.avatar} name={ss.name} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex md:mt-12 gap-1 justify-center">
                        <button
                            className={`size-20 ${disabledPrev ? 'bg-blue-300' : 'bg-blue-500'}`}
                            onClick={previusStorie}
                            disabled={disabledPrev}
                        >
                            ←
                        </button>
                        <button
                            className={`size-20 ${disabledNext ? 'bg-blue-300' : 'bg-blue-500'}`}
                            onClick={nextStorie}
                            disabled={disabledNext}>
                            →
                        </button>
                    </div>
                </div>
                <div>
                    <img className="size-full object-cover min-h-[820px]" alt="woman with protesis"
                        src={"/assets/images/photos/woman_sentada_mano_protesis.jpg"} />
                </div>
            </div>
        </section >
    );
}

export default SectionSuccessStories;