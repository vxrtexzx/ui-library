import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, position = 'top', children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {visible && <div className={`tooltip-box ${position}`}>{text}</div>}
            {children}
        </div>
    );
};

export default Tooltip;
