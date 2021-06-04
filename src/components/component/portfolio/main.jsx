//React Components
import React from 'react';

//Assets

//SCSS
import '../../../scss/main.scss';

//Components
import SpaceCard from '../../../components/component/portfolio/spaceCard';
import HeroSection from '../../../components/component/portfolio/heroSection';

export default function Main() {
    return (
        <main>
            <HeroSection />
            <SpaceCard />
        </main>
    )
}
