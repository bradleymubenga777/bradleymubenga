//React Modules
import React from 'react';

//SCSS

//React Components
import HeroSection from '../component/about/heroSection';
import TalkTech from '../component/about/talkTech';
import WorkExperience from '../component/about/workExperience';
import PortfolioCTA from '../component/about/portfolioCTA';
import Contact from '../component/contact/startProject';


export default function About() {
    return (
        <main>
            <HeroSection />
            <TalkTech />
            <WorkExperience />
            <PortfolioCTA />
            <Contact />
        </main>
    )
}
