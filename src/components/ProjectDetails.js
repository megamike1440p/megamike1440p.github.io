//ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
    { id: 1, title: "Project 1", description: "Detailed description of Project 1", link: "https://github.com/megamike1440p/portfolio" },
    { id: 2, title: "Project 2", description: "Detailed description of Project 2", link: "https://github.com/megamike1440p/portfolio" },
    { id: 3, title: "Project 3", description: "Detailed description of Project 3", link: "https://github.com/megamike1440p/portfolio" },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View on GitHub</a>
        </div>
    );
}

export default ProjectDetails;