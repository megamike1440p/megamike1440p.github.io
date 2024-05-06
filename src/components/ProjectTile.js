// ProjectTile.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectTile = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="group border border-black border-opacity-10 rounded-lg p-6 hover:scale-125 transition-transform block shadow-sm hover:shadow-md w-80 h-52 mx-auto my-6 relative bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200">
            <div className="flex flex-col justify-center items-center h-full text-center">
                <h2 className="text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">{project.title}</h2>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center p-4">{project.description}</p>
            </div>
        </Link>
    );
}

export default ProjectTile;
