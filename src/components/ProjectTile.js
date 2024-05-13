import React from 'react';

const ProjectTile = ({ project, onSelect }) => {
    return (
        <div onClick={() => onSelect(project)} className="project-tile group">
            <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectTile;
