//React Modules
import React from 'react';

//React Components
import HeroSection from '../component/home/heroSection';
import StrategySection from '../component/home/strategySection';
import NeedProof from '../component/home/needProof';
import ContactSection from '../component/contact/startProject';
import TheProcess from '../component/home/theProcess';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <StrategySection />
            <TheProcess />
            <NeedProof />
            <ContactSection />
        </main>
    )
}
