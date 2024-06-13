import React from 'react';

const skills = {
    "Programming Languages": ["Python", "C/C++", "Java", "LISP", "JavaScript", "TypeScript"],
    "Programming Paradigms": ["Object-Oriented", "Functional", "Procedural"],
    "Web Development": ["HTML", "PHP", "CSS", "PostCSS", "React", "Ionic", "Tailwind"],
    "Testing Frameworks": ["Jest", "JUnit"],
    "Methodologies": ["Agile", "Scrum", "Test Driven Development"],
    "Database": ["SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, Firebase)"]
};

const TechnicalSkills = () => {
    return (
        <div className="container-custom text-center">
            <div className="inline-block text-left">
                <br />
                {Object.keys(skills).map((category, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">{category}</h3>
                        <ul className="list-disc list-inside">
                            {skills[category].map((skill, i) => (
                                <li key={i} className="text-lg">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;
