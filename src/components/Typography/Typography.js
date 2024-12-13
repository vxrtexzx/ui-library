import React from 'react';
import './Typography.css';

const Typography = ({ textSize = 'md', className, children }) => {
    return <p className={`typography ${textSize} ${className}`}>{children}</p>;
};

export default Typography;
