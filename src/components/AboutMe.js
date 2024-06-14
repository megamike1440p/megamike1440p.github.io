//AboutMe.js
import React from 'react';

const aboutMeContent = {
    intro: "Hello, I am Michael Whitten, and this is my portfolio web page.",
    bio: "I graduated from Bloomington High School South (Indiana) in 2012. I then served 6 years in the Navy as an Aegis Fire Controlman, receiving technical training in electronic and radar systems. Onboard the USS Princeton, I maintained fire control, networking, and power conversion systems, rising to E-5 and serving as Lead Technician and Work Center Supervisor. After an honorable discharge in 2019, I earned my AA from Pensacola State College in 2020 and a BS in Computer Science from the University of West Florida in 2024."
};

const AboutMe = () => {
    return (
        <div className="container-custom">
            <div className="mt-4 space-y-3">
                <p>{aboutMeContent.intro}</p>
                <p>{aboutMeContent.bio}</p>
            </div>
        </div>
    );
}

export default AboutMe;