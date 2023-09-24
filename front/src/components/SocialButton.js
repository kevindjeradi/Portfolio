import React, { useState } from 'react';
import 'style/SocialButton.css';

function SocialButton({ svgPath, linkColor, hoverBackgroundColor, hoverColor, href, position = 'center'}) {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
        color: linkColor,
        background: isHovered ? hoverBackgroundColor : '#fff'
    };

    return (
        <div className={`button-container ${position}`}>
            <div className="social-button">
                <a 
                    className="social-button-link" 
                    href={href} 
                    style={baseStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill={isHovered ? hoverColor : "currentColor"}>
                        {svgPath}
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default SocialButton;