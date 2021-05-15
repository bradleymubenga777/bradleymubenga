//React Modules
import React from 'react';

//SCSS
import '../../scss/heroSection.scss';

//Assets
import backgroundVideo from '../../assets/video/bradley-mubenga-web-developer-video.m4v';

//React Components
import { WhiteBtn, BlackBtn } from '../buttons/buttons';

export default function HeroSection() {
    return (
    <section className="jumbotron jumbotron-fluid heroSection d-flex flex-column justify-content-center align-items-center">
        <div className="text-center container heroText">
            <h1 className="display-4">Professional Web Design for Busy Entreprenurs</h1>

            <div className="d-flex justify-content-center align-items-center g-5 mt-4">
                <WhiteBtn />
                <span className="mx-3"></span>
                <BlackBtn />
            </div>
        </div>

        <video src={backgroundVideo} muted loop autoPlay></video>
    </section>
    )
}
