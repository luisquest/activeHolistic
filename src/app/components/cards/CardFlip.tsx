import React from 'react';
import './flipCard.css';


interface CardProps {
    iconImage: string;
    backImage: string;
    title: string;
    description: string;
    className?: string;
}


const CardFlip: React.FC<CardProps> = ({ iconImage, backImage, title, description, className }) => {

    return (
        <div className={`flip-card ${className}`}>
            <div className="flip-card-inner">
                {/* FRONT */}
                <div className="flip-card-front">
                    <div className="flex flex-col gap-8 items-center justify-center px-7 py-20 text-center text-blue-900 group-hover:text-white">
                        <img src={iconImage} alt="Icon Image" className="object-contain max-w-20 m-auto group-hover:hidden" />
                        <div className="text-xl font-bold mb-2">
                            {title}
                        </div>
                        <div className='text-lg'>
                            {description}
                        </div>
                    </div>
                </div>
                {/* BACK */}
                <div className="flip-card-back" style={{ backgroundImage: `url('${backImage}')` }}>
                    <div className="flex flex-col gap-8 items-center justify-center px-7 py-20 text-center text-blue-900 group-hover:text-white">
                        <div className="text-xl font-bold mb-2">
                            {title}
                        </div>
                        <div className='text-lg'>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFlip;
