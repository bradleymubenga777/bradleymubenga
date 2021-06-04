import React from 'react'

//Assets
import spaceWebsiteImage from '../../../assets/images/portfolio/space-events-website-showcase-1.jpeg';

//Components
import { ReadMore } from '../../buttons/buttons';

export default function SpaceCard() {
    return (
        <div className="container">
            <div className="spaceCard p-5 my-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center">
                        <img className="img-fluid" width="350px" src={spaceWebsiteImage} alt="space events venue website by bradley mubenga" />
                    </div>
 
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center">
                        <h2>Space Events Venue</h2>
                        <p className="lead">An elegant website to complement a venue with beautiful architecture.</p>
                        <div>
                            <ReadMore link={"/spaceCaseStudy"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
