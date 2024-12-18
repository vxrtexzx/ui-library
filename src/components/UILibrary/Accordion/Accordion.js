import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, defaultOpen = false, children }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="accordion">
            <div
                className="accordion-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className="accordion-toggle">
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default Accordion;
