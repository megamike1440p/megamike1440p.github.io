import React from 'react';

const aboutMeContent = {
    intro: "Hello, I am Michael Whitten, and this is my portfolio web page.",
    bio: "I graduated from Bloomington High School South in 2012. After graduation, I served 6 years enlisted in the Navy as an Aegis Fire Controlman, where I received advanced technical training in 'A' school, learning Electronic Technician skills, and advanced Radar Technician training at 'C' school. During my service onboard the USS Princeton in San Diego, I worked on a variety of equipment and systems including Fire Control Systems, their corresponding networking systems, and Power Conversion Systems. I achieved a rank of E-5 and held several positions, including Maintenance Man, Junior Technician, Lead Technician, and Work Center Supervisor. I was honorably discharged in 2019 and began my education at Pensacola State College the same year, achieving my AA in 2024. I then promptly transferred to the University of West Florida, where I achieved my BS in Computer Science.",
};

const AboutMe = () => {
    return (
        <div className="container-custom">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="mt-4 space-y-3">
                <p>{aboutMeContent.intro}</p>
                <p>{aboutMeContent.bio}</p>
            </div>
        </div>
    );
}

export default AboutMe;