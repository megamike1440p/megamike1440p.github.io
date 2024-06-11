import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectList = ({ onProjectSelect }) => {
    const projects = [
        { id: 1, title: "This website", shortDescription: "The web page you are currently on", fullDescription: "This is a personal portfolio site designed to list my educational and professional history as well as showcase various projects I've completed during my education in Computer Science. The site is written in JavaScript and built using React and Tailwind CSS/PostCSS.", link: "https://github.com/megamike1440p/portfolio", images: [] },
        { id: 2, title: "Project 2", shortDescription: "Short description of Project 2", fullDescription: "Full detailed description of Project 2.", link: "https://github.com/megamike1440p/portfolio", images: ["image3.jpg", "image4.jpg"] },
        { id: 3, title: "Project 3", shortDescription: "Short description of Project 3", fullDescription: "Full detailed description of Project 3.", link: "https://github.com/megamike1440p/portfolio", images: ["image5.jpg", "image6.jpg"] },
        // Add more projects as needed
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {projects.map(project => (
                <ProjectTile key={project.id} project={project} onSelect={onProjectSelect} />
            ))}
        </div>
    );
};

export default ProjectList;
