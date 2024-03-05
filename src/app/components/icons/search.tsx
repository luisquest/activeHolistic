import React from 'react';
import IconProps from './iconProps';

const SearchIcon: React.FC<IconProps> = ({ fill = "none", width = '24px', height = '24px', className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`with-icon_icon__MHUeb ${className}`}
            data-testid="geist-icon"
            fill={fill}
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
            <path d="M16 16l4.5 4.5" />
        </svg>
    );
};

export default SearchIcon;