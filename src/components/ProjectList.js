import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectList = ({ onProjectSelect }) => {
    const projects = [
        {
            id: 1,
            title: "This website",
            shortDescription: "The web page you are currently on",
            fullDescription: "This is a personal portfolio site designed to list my educational and professional history as well as showcase various projects I've completed during my education in Computer Science. The site is written in JavaScript and built using React and Tailwind CSS/PostCSS.",
            link: "https://github.com/megamike1440p/portfolio",
            images: []
        },
        {
            id: 2,
            title: "Analytical Model Simulation",
            shortDescription: "Simulates and analyzes queuing models based on user input.",
            fullDescription: "This project is an analytical model simulation designed to demonstrate the use of object-oriented design, data structures, and mathematical modeling in C++. It analyzes queuing models to calculate various metrics such as the probability of zero customers in the system, the average number of customers in the system, the average time a customer spends in the system, the average number of customers in the queue, and the average time a customer spends waiting in the queue. It handles user input, event management, and scheduling using a priority queue.",
            link: "https://github.com/megamike1440p/dsa2project2",
            images: [`${process.env.PUBLIC_URL}/images/P2.png`]
        },
        {
            id: 3,
            title: "LISP FSA Generator", 
            shortDescription: "A Python script that generates LISP code to determine if a given string is valid for a given FSA.", 
            fullDescription: "This Python script will take a given finite state automata from an input file and will use it to generate LISP code. This LISP program will then use a string taken from an input file and determine whether the string is a valid input for the given finite state automata.", 
            link: "https://github.com/megamike1440p/PLA4-Lisp-FSA-Gen", 
            images: [`${process.env.PUBLIC_URL}/images/P3.png`]
        },
        {
            id: 4,
            title: "Project 4", 
            shortDescription: "Short Description", 
            fullDescription: "Full Description",
            link: "https://github.com/megamike1440p/PLA4-Lisp-FSA-Gen", 
            images: [`${process.env.PUBLIC_URL}/images/P4.png`]
        },
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
