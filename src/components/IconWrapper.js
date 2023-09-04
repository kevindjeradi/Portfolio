import React from 'react';

function IconWrapper({ children }) {
    return (
        <div className="icon-wrapper">
            {React.cloneElement(children, { style: { color: 'currentColor' } })}
        </div>
    );
}

export default IconWrapper;
