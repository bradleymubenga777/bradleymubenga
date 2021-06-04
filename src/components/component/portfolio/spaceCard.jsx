import React from 'react'

//Assets
import spaceWebsiteImage from '../../../assets/images/portfolio/space-events-website-showcase-1.jpeg';

//Components
import { ReadMore } from '../../buttons/buttons';

export default function SpaceCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <img className="img-fluid" width="350px" src={spaceWebsiteImage} alt="space events venue website by bradley mubenga" />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <h2>Space Events Venue</h2>
                    <p className="lead">An elegant website to complement a venue with beautiful architecture.</p>
                    <ReadMore link={"/spaceCaseStudy"} />
                </div>
            </div>
        </div>
    )
}
