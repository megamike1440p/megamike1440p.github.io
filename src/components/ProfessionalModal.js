//ProfessionalModal.js
import React, { useEffect, useState } from 'react';

const ProfessionalModal = ({ job, details, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`education-modal-overlay ${isVisible ? 'fade-in' : 'fade-out'}`} onClick={handleClose}>
            <div className="education-modal-content" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-bold mb-2">{job}</h2>
                <p className="text-lg mb-0">{details.Position}</p>
                <p className="text-sm text-gray-400 mb-2">{details.Duration}</p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Responsibilities:</h3>
                <ul className="modal-list">
                    {details.Responsibilities.map((responsibility, index) => (
                        <li key={index} className="modal-list-item mb-3">{responsibility}</li>
                    ))}
                </ul>
                <button onClick={handleClose} className="modal-close-button">Close</button>
            </div>
        </div>
    );
};

export default ProfessionalModal;
