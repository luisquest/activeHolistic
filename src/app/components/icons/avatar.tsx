import React from 'react';
import IconProps from './iconProps';

const AvatarIcon: React.FC<IconProps> = ({ fill = 'none', width = '24px', height = '24px', className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={`with-icon_icon__MHUeb ${className}`}
            version="1.0"
            width={width}
            height={height}
            stroke={fill}
            fill="currentColor"
            viewBox="0 0 50 50"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" stroke={fill} fill="currentColor">
                <path d="M201 456 c-35 -19 -50 -54 -51 -113 0 -52 16 -103 32 -103 4 0 8 -13 8 -29 0 -26 -7 -34 -59 -61 -33 -18 -63 -42 -70 -56 -25 -55 -27 -54 189 -54 219 0 216 -1 185 59 -9 18 -35 38 -70 54 -62 30 -68 46 -35 99 23 38 27 122 8 163 -22 48 -88 68 -137 41z m104 -31 c21 -20 25 -34 25 -83 0 -44 -5 -66 -20 -85 -11 -14 -20 -39 -20 -56 0 -26 7 -34 62 -63 36 -19 65 -42 69 -55 l8 -23 -179 0 -179 0 8 23 c4 13 33 36 69 55 55 29 62 37 62 63 0 17 -9 42 -20 56 -15 19 -20 41 -20 85 0 49 4 63 25 83 15 16 36 25 55 25 19 0 40 -9 55 -25z" />
            </g>
        </svg>
    );
}

export default AvatarIcon;