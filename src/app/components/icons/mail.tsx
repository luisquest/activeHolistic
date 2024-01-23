import React from 'react';
import IconProps from './iconProps';

const MailIcon: React.FC<IconProps> = ({ color = 'currentColor', width = '24px', height = '24px', className }) => {
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
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6l-10 7L2 6" />
        </svg>
    );
};

export default MailIcon;