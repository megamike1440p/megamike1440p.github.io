import React, { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectSelect = project => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="container-custom">
            <p className="mt-4">Here are some of the projects I have created and worked on over the course of my education.</p>
            <ProjectList onProjectSelect={handleProjectSelect} />
            {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </div>
    );
};

export default Projects;
