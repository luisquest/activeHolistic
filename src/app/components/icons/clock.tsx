import React from 'react';
import IconProps from './iconProps';

const ClockIcon: React.FC<IconProps> = ({ color = 'currentColor', width = '24px', height = '24px', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={`with-icon_icon__MHUeb ${className}`}
            data-testid="geist-icon"
            fill="none"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
    );
};

export default ClockIcon;