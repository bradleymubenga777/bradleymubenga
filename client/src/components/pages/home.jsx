//React Modules
import React from 'react';

//React Components
import HeroSection from '../component/home/heroSection';
import StrategySection from '../component/home/strategySection';
import NeedProof from '../component/home/needProof';
import ContactSection from '../component/contact/startProject';
import Footer from '../component/contact/Footer';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <StrategySection />
            <NeedProof />
            <ContactSection />
            <Footer />
        </main>
    )
}
