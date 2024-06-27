import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectList = ({ onProjectSelect }) => {
    const projects = [
        {
            id: 1,
            title: "This website (JavaScript)",
            shortDescription: "The web page you are currently on",
            fullDescription: "This is a personal portfolio site designed to list my educational and professional history as well as showcase various projects I've completed during my education in Computer Science. The site is written in JavaScript and built using React and Tailwind CSS/PostCSS.",
            link: "https://github.com/megamike1440p/portfolio",
            images: []
        },
        {
            id: 2,
            title: "Analytical Queuing Model Simulation (C++)",
            shortDescription: "Simulates and analyzes queuing models based on user input.",
            fullDescription: "This project is an analytical model simulation designed to demonstrate the use of object-oriented design, data structures, and mathematical modeling in C++. It analyzes queuing models to calculate various metrics such as the probability of zero customers in the system, the average number of customers in the system, the average time a customer spends in the system, the average number of customers in the queue, and the average time a customer spends waiting in the queue. It handles user input, event management, and scheduling using a priority queue.",
            link: "https://github.com/megamike1440p/dsa2project2",
            images: [`${process.env.PUBLIC_URL}/images/P2.png`]
        },
        {
            id: 3,
            title: "LISP FSA Generator (Python/LISP)", 
            shortDescription: "A Python script that generates LISP code to determine if a given string is valid for a given FSA.", 
            fullDescription: "This Python script will take a given finite state automata from an input file and will use it to generate LISP code. This LISP program will then use a string taken from an input file and determine whether the string is a valid input for the given finite state automata.", 
            link: "https://github.com/megamike1440p/PLA4-Lisp-FSA-Gen", 
            images: [`${process.env.PUBLIC_URL}/images/P3.png`]
        },
        {
            id: 4,
            title: "Best Fit Memory Allocator (C++)",
            shortDescription: "Allocates programs listed from files to memory bins using the Best Fit strategy",
            fullDescription: "This program implements a memory management system using a best-fit allocation strategy. It reads memory slots and process sizes from input files, then allocates the processes to the memory slots. If a process fits, it is assigned to the best-fitting slot, updating the slot's base and displacement. The current memory slot map is printed after each allocation attempt. If a process cannot be allocated, the process terminates the allocation. The program outputs the result of each allocation attempt and the final state of the memory slots.",
            link: "https://github.com/megamike1440p/SYSNET4",
            images: [`${process.env.PUBLIC_URL}/images/P4-1.png`, `${process.env.PUBLIC_URL}/images/P4-2.png`,
            `${process.env.PUBLIC_URL}/images/P4-3.png`, `${process.env.PUBLIC_URL}/images/P4-4.png`,
            ]
        },
        {
            id: 5,
            title: "Server side calculator with analytical clients (Python)",
            shortDescription: "Server side calculator with api checker, calculation-counter, and latency-analyzer clients.",
            fullDescription: "These python scripts provide a simple server side calculator with a history feature as well as an API endpoint which provides the history in a json format. It also has three clients: An API endpoint status checker, a calculation-counter that provides the number of calculations in the history file, and a latency analyzer that provides the latency of the API endpoint.",
            link: "https://github.com/megamike1440p/SYSNET2-P4-PYTHON-CALC-SERVERCLIENTS",
            images: [`${process.env.PUBLIC_URL}/images/P5-1.png`, `${process.env.PUBLIC_URL}/images/P5-2.png`, `${process.env.PUBLIC_URL}/images/P5-3.png`]
        },
        {
            id: 6,
            title: "TV Nopes (JavaScript)",
            shortDescription: "A javascript site for users to create lists of their least favorite shows using the TV-Maze REST API",
            fullDescription: "TV Nopes is a javascript website built using Handlebars and CSS. It allows users to create accounts, log in, and search for TV shows by accessing the TV-Maze REST API. The shows are added to the user's \"Nope List\" which is stored in MongoDB alongside their login credentials.",
            link: "https://github.com/megamike1440p/TV-NOPES",
            images: [`${process.env.PUBLIC_URL}/images/P6-1.png`, `${process.env.PUBLIC_URL}/images/P6-2.png`]
        },
        {
            id: 7,
            title: "Pong Clone (Java)",
            shortDescription: "A Pong clone written in Java using JavaFX",
            fullDescription: "This is a clone of the classic game 'Pong', it is written in Java and uses JavaFX for the graphics/UI. It uses a custom game loop designed specifically for JavaFX and also tracks the running Frames Per Second (FPS)",
            link: "https://github.com/megamike1440p/Pong",
            images: [`${process.env.PUBLIC_URL}/images/P7.gif`]
        },
        {
            id: 8,
            title: "Elden Ring Save Swapper (Python)",
            shortDescription: "GUI based Python Script which facillitates swapping between multiple saves in 'Elden Ring'",
            fullDescription: "This program allows users to label and swap between multiple saves files in the game 'Elden Ring', which has a limited number of save slots. It uses a JSON file to keep track of the user's various save files, as well as which one was last used. It features two separate functions to backup user saves to two separate locations for maximum redundancy. Each time the user swaps saves, a timestamped backup with the save's chosen label is created. The latest three timestamped backups are kept in the user's chosen backup folder, and directories are created within 'Elden Ring's' save location to house the save files used for swapping.",
            link: "https://github.com/megamike1440p/ER-SaveSwap",
            images: [`${process.env.PUBLIC_URL}/images/P8-1.png`, `${process.env.PUBLIC_URL}/images/P8-2.png`]
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
