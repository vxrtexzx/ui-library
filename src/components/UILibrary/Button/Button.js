import React from 'react';
import './Button.css';

const Button = ({ type = 'button', onClick, disabled, size = 'md', variant = 'primary', children }) => {
    return (
        <button
            className={`button ${variant} ${size}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
