//React Modules
import React from 'react';

//SCSS
import '../../scss/heroSection.scss';

//React Components
import { WhiteBtn, BlackBtn } from '../buttons/buttons';

export default function HeroSection() {
    return (
    <div className="jumbotron jumbotron-fluid heroSection d-flex flex-column justify-content-center align-items-center">
        <div className="text-center container">
            <h1 className="display-4">Professional Web Design for Busy Entreprenurs</h1>

            <div className="d-flex justify-content-center align-items-center g-5">
                <WhiteBtn />
                <span className="mx-3"></span>
                <BlackBtn />
            </div>
        </div>
    </div>
    )
}
