//REACT Modules
import React from 'react';

//SCSS
import '../../../scss/portfolioCTA.scss';

//Components
import { PortfolioBtn } from '../../buttons/buttons';

export default function PortfolioCTA() {
    return (
        <section className="py-5 portfolioCTA">
                <div className="d-flex flex-column text-center container">
                    <h1>Portfolio</h1>
                    <p className="lead">Checkout my portfolio by clicking the button below</p>
                    <div className="portButton">
                        <PortfolioBtn />
                    </div>
                </div>
        </section>
    )
}
