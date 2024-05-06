//Projects.js
import React from 'react';
import ProjectList from './ProjectList';  // Assuming ProjectList imports ProjectTile and handles the list

const Projects = () => {
    return (
        <div className="container-custom">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-4">Here are some of the projects I have created and worked on over the course of my education.</p>
            <ProjectList />
        </div>
    );
}

export default Projects;