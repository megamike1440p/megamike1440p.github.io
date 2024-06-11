import React, { useState } from 'react';
import EducationModal from './EducationModal';

const EducationHistory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courses = {
        "Computer Science Theory": [
            "Intro Computer Organization",
            "Discrete Structures",
            "Algorithm and Program Design",
            "Data Structures & Algorithms I & II",
            "Theory of Computation",
            "Systems & Networks I & II"
        ],
        "Software Engineering": [
            "Software Engineering I & II",
            "Software Engineering Management",
            "Capstone Project"
        ],
        "Programming and Development": [
            "Intermediate Programming",
            "Advanced Computer Programming",
            "Program Languages",
            "Server-Side Programming",
            "C++ Programming"
        ],
        "Database and Data Science": [
            "Database Systems",
            "Data Mining"
        ],
        "Math and Science": [
            "Linear Algebra",
            "Introduction to Mathematical Statistics I",
            "Analytic Geometry & Calculus I & II",
            "Calculus-Based Physics I & II with Lab"
        ]
    };

    return (
        <div className="container-custom text-center">
            <div className="mb-8">
                <br/>
                <h2 className="text-2xl font-bold mb-0">University of West Florida (UWF)</h2>
                <p className="text-lg mb-0">Bachelor of Science in Computer Science</p>
                <p className="text-sm text-gray-400 mb-0">Spring 2021 - Spring 2024</p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-0">Pensacola State College (PSC)</h2>
                <p className="text-lg mb-0">Associate of Arts</p>
                <p className="text-sm text-gray-400 mb-0">Summer 2019 - Fall 2020</p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-0">Technical Military Training (NAVY)</h2>
                <p className="text-lg mb-0">Advanced Technical Training</p>
                <p className="text-lg mb-0">Fire Controlman 'A' School</p>
                <p className="text-lg mb-0">Fire Controlman 'C' School - Aegis Fire Control Systems</p>
                <p className="text-sm text-gray-400 mb-0">Summer 2013 - Summer 2014</p>
            </div>
            <div className="text-center">
                <button onClick={() => setIsModalOpen(true)} className="modal-open-button">Computer Science Relevant Course List</button>
            </div>
            {isModalOpen && <EducationModal courses={courses} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default EducationHistory;
