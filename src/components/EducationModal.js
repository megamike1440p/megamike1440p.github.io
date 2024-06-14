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
            <div className="education-modal-content text-center" onClick={e => e.stopPropagation()}>
                <div className="relative">
                    <button onClick={handleClose} className="modal-close-button">✕</button>
                    <h1 className="modal-title">Course List (UWF)</h1>
                </div>
                <div className="flex flex-col items-center">
                    <div className="inline-block text-left">
                        {Object.keys(courses).map((category, index) => (
                            <div key={index} className="modal-category mb-4">
                                <h2 className="modal-subtitle mb-2">{category}</h2>
                                <ul className="modal-list list-disc list-inside">
                                    {courses[category].map((course, i) => (
                                        <li key={i} className="modal-list-item text-lg">{course}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationModal;
