import React from 'react';
import IconProps from './iconProps';

const TwitterIcon: React.FC<IconProps> = ({ color = 'currentColor', width = '24px', height = '24px', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={`with-icon_icon__MHUeb ${className}`}
            data-testid="geist-icon"
            fill="none"
            shape-rendering="geometricPrecision"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            >
            <path fill="var(--geist-fill, currentColor)" stroke="none" d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
        </svg>
    );
};

export default TwitterIcon;