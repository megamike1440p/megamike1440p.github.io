// ProjectList.js
import React from 'react';
import ProjectTile from './ProjectTile';

const projects = [
    { id: 1, title: "Project 1", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 2, title: "Project 2", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 3, title: "Project 3", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 1, title: "Project 4", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 2, title: "Project 5", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 3, title: "Project 6", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 2, title: "Project 7", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    { id: 3, title: "Project 8", description: "Description", link: "https://github.com/megamike1440p/portfolio" },
    
];

const ProjectList = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {projects.map(project => (
                <ProjectTile key={project.id} project={project} />
            ))}
        </div>
    );
}

export default ProjectList;
