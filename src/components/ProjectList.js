// ProjectList.js
import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectList = ({ onProjectSelect }) => {
    const projects = [
        { id: 1, title: "Project 1", description: "Description", link: "https://github.com/megamike1440p/portfolio", images: ["image1.jpg", "image2.jpg"] },
        { id: 2, title: "Project 2", description: "Description", link: "https://github.com/megamike1440p/portfolio", images: ["image3.jpg", "image4.jpg"] },
        { id: 3, title: "Project 3", description: "Description", link: "https://github.com/megamike1440p/portfolio", images: ["image5.jpg", "image6.jpg"] },
        { id: 1, title: "Project 4", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
        { id: 2, title: "Project 5", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
        { id: 3, title: "Project 6", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
        { id: 2, title: "Project 7", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
        { id: 3, title: "Project 8", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
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