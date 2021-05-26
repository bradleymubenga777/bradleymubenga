//React Modules
import React from 'react';

//React Components
import HeroSection from '../component/home/heroSection';
import StrategySection from '../component/home/strategySection';
import NeedProof from '../component/home/needProof';
import ContactSection from '../component/contact/startProject';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <StrategySection />
            <NeedProof />
            <ContactSection />
        </main>
    )
}
