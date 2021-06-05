import React from 'react';

import '../../../scss/portfolioHeroSection.scss';

export default function HeroSection() {
    return (
        <section className="jumbotron jumbotron-fluid d-flex flex-column justify-content-center align-items-center mt-5 mb-0 heroBackground">
            <div className="text-center container mt-5">
                <h1 className="display-4">Portfolio</h1>
                <p className="lead">Strategy, design and problems solved.</p>
            </div>
        </section>
    )
}