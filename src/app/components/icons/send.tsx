import React from 'react';
import IconProps from './iconProps';

const SendIcon: React.FC<IconProps> = ({ color = 'currentColor', width = '24px', height = '24px', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`with-icon_icon__MHUeb ${className}`}
            data-testid="geist-icon"
            fill="none"
            shapeRendering="geometricPrecision"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
    );
};

export default SendIcon;