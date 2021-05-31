//React Modules
import React from 'react';

//SCSS

//React Components
import HeroSection from '../component/about/heroSection';
import TalkTech from '../component/about/talkTech';
import WorkExperience from '../component/about/workExperience';


export default function About() {
    return (
        <main>
            <HeroSection />
            <TalkTech />
            <WorkExperience />
        </main>
    )
}
