import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange, disabled, label, danger }) => {
    return (
        <div className="input-container">
            {label && <label className={danger ? 'label danger' : 'label'}>{label}</label>}
            <input
                className={`input ${danger ? 'danger' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
