//Home.js
import React, { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Collapse from './Collapse';
import Placeholder from './Placeholder';
import NavBar from './NavBar';

const Home = () => {
    const [openSections, setOpenSections] = useState({});
    const [navbarHeight, setNavbarHeight] = useState(0);
    
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);

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
                    const topPosition = element.offsetTop - navbarHeight;
                    const scrollDuration = Math.abs(window.scrollY - topPosition) * 0.5; // Example: 0.5 milliseconds per pixel scrolled

                    window.scrollTo({ top: topPosition, behavior: 'smooth' });

                    // Delay the flash effect until after the scroll is likely complete
                    setTimeout(() => {
                        element.classList.add('flash-effect');
                        setTimeout(() => {
                            element.classList.remove('flash-effect');
                        }, 1500); // Duration of the flash animation
                    }, scrollDuration);
                }
            }, delay);
        }
    };

    return (
        <div>
            <NavBar onSectionClick={handleSectionToggle} />
            <div style={{ paddingTop: `${navbarHeight}px` }}>
                <Collapse title="About Me" id="AboutMe" isOpen={openSections['AboutMe']} onToggle={() => handleSectionToggle('AboutMe', false)}>
                    <AboutMe />
                </Collapse>
                <Collapse title="Education History" id="EducationHistory" isOpen={openSections['EducationHistory']} onToggle={() => handleSectionToggle('EducationHistory', false)}>
                    <Placeholder />
                </Collapse>
                <Collapse title="Professional History" id="ProfessionalHistory" isOpen={openSections['ProfessionalHistory']} onToggle={() => handleSectionToggle('ProfessionalHistory', false)}>
                    <Placeholder />
                </Collapse>
                <Collapse title="Technical Skills" id="TechnicalSkills" isOpen={openSections['TechnicalSkills']} onToggle={() => handleSectionToggle('TechnicalSkills', false)}>
                    <Placeholder />
                </Collapse>
                <Collapse title="Projects" id="Projects" isOpen={openSections['Projects']} onToggle={() => handleSectionToggle('Projects', false)}>
                    <Projects />
                </Collapse>
            </div>
        </div>
    );
}
export default Home;
