import React, { useEffect, useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (project) {
            setIsVisible(true);
        }
    }, [project]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!project) return null;

    return (
        <div className={`modal-overlay ${isVisible ? 'fade-in' : 'fade-out'}`} onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="relative">
                    <button onClick={handleClose} className="modal-close-button">✕</button>
                    <h1 className="modal-title">{project.title}</h1>
                </div>
                <p className="modal-description">{project.description}</p>
                {project.images && project.images.map((img, index) => (
                    <img key={index} src={img} alt={`Screenshot of ${project.title}`} className="modal-image"/>
                ))}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link">View on GitHub</a>
            </div>
        </div>
    );
};

export default ProjectModal;
