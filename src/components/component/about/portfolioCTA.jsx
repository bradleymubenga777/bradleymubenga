//REACT Modules
import React from 'react';

//SCSS

//Components
import { PortfolioBtn } from '../../buttons/buttons';

export default function PortfolioCTA() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row d-flex flex-column text-center">
                    <h1>Portfolio</h1>
                    <p className="lead">Checkout my portfolio by clicking the button below</p>
                    <div className="portButton">
                        <PortfolioBtn />
                    </div>
                </div>
            </div>
        </section>
    )
}
