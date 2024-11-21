import React from 'react';

const AboutSection = () => {
    return (
        <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    About Me
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    I’m an aspiring web developer with a passion for creating user-friendly and impactful digital experiences.
                    My journey in software development has been fueled by a love for problem-solving and innovation.
                    From brainstorming creative ideas to turning them into fully functional applications, I am dedicated to improving my skills every day.
                    When I’m not coding, you’ll find me exploring new technologies or working on projects that inspire me to grow.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
