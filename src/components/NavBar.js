//NavBar.js
import React from 'react';

const NavBar = ({ onSectionClick }) => {
    return (
        <nav className="navbar md:px-4">
            <ul className="flex flex-wrap md:flex-nowrap">
                {['AboutMe', 'EducationHistory', 'ProfessionalHistory', 'TechnicalSkills', 'Projects'].map((section, idx) => (
                    <li key={idx}
                        onClick={() => onSectionClick(section, true)}
                        className="cursor-pointer py-2 md:py-0 px-4 md:px-2 md:mx-2 mb-2 md:mb-0 rounded transition duration-300 hover:bg-opacity-25"
                    >
                        {section.replace(/([A-Z])/g, ' $1').trim()}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;