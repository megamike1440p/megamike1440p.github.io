//home.js
import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Collapse from './Collapse';
import Placeholder from './Placeholder';
import NavBar from './NavBar';

const Home = () => {
    const [openSections, setOpenSections] = useState({});
    
    const handleSectionToggle = (sectionId, fromNavBar = false) => {
        const isAlreadyOpen = openSections[sectionId];
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: fromNavBar ? true : !prev[sectionId]
        }));
        if (fromNavBar) {
            const delay = !isAlreadyOpen ? 450 : 0;

            setTimeout(() => {
                const element = document.getElementById(`header-${sectionId}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }
            }, delay);
        }
    };

    return (
        <div>
            <NavBar onSectionClick={handleSectionToggle} />
            <div style={{ paddingTop: '100px' }}>
                <Collapse title="About Me" id="AboutMe" isOpen={openSections['AboutMe']} onToggle={() => handleSectionToggle('AboutMe', false)}>
                    <AboutMe />
                </Collapse>
                <Collapse title="Education History" id="educationHistory" isOpen={openSections['educationHistory']} onToggle={() => handleSectionToggle('educationHistory', false)}>
                    <Placeholder />
                </Collapse>
                <Collapse title="Professional History" id="professionalHistory" isOpen={openSections['professionalHistory']} onToggle={() => handleSectionToggle('professionalHistory', false)}>
                    <Placeholder />
                </Collapse>
                <Collapse title="Technical Skills" id="technicalSkills" isOpen={openSections['technicalSkills']} onToggle={() => handleSectionToggle('technicalSkills', false)}>
                    <Placeholder />
                </Collapse>
                <Collapse title="Projects" id="projects" isOpen={openSections['projects']} onToggle={() => handleSectionToggle('projects', false)}>
                    <Projects />
                </Collapse>
            </div>
        </div>
    );
}
export default Home;