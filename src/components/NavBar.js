//navbar.js
import React from 'react';

const NavBar = ({ onSectionClick }) => {
    return (
        <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: 'rgba(7, 85, 135, 1)' }}>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyle: 'none', padding: '1rem 0' }}>
                {['AboutMe', 'educationHistory', 'professionalHistory', 'technicalSkills', 'projects'].map((section, idx) => (
                    <li key={idx}
                        onClick={() => onSectionClick(section, true)}
                        style={{
                            cursor: 'pointer',
                            padding: '0.5rem 1rem',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        {section.replace(/([A-Z])/g, ' $1').trim()}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;