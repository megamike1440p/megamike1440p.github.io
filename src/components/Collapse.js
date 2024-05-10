//collapse.js
import React, { useRef, useEffect } from 'react';

const Collapse = ({ title, children, isOpen, onToggle, id }) => {
    const headerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
    }, [isOpen]);

    return (
        <div>
            <button className="collapse-trigger" ref={headerRef} onClick={onToggle} id={`header-${id}`}>
                {title}
            </button>
            <div ref={contentRef} className="collapse-content" style={{ maxHeight: "0px" }}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;