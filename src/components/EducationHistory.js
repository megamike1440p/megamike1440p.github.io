import React, { useEffect, useState } from 'react';

const EducationModal = ({ courses, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (courses) {
            setIsVisible(true);
        }
    }, [courses]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!courses) return null;

    return (
        <div className={`education-modal-overlay ${isVisible ? 'fade-in' : 'fade-out'}`} onClick={handleOverlayClick}>
            <div className="education-modal-content">
                <div className="relative">
                    <button onClick={handleClose} className="modal-close-button">✕</button>
                    <h1 className="modal-title">Complete Course List</h1>
                </div>
                {Object.keys(courses).map((category, index) => (
                    <div key={index} className="modal-category">
                        <h2 className="modal-subtitle">{category}</h2>
                        <ul className="modal-list">
                            {courses[category].map((course, i) => (
                                <li key={i} className="modal-list-item">{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationModal;
