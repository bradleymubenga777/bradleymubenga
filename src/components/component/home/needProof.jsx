//React Modules
import React from 'react';

//SCSS
import '../../../scss/needProof.scss';

//Assets
import joshImage from '../../../assets/images/josh-cooke.jpg';
import showCaseImage from '../../../assets/images/portfolio/space-events-website-showcase-1.jpeg';
import quoteMark from '../../../assets/svg/quote-left.svg';

//React Functional Component
export default function needProof() {
    return (
        <section className="needProofSection py-5">
            <div className="container d-flex justify-content-center pb-4">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center headerText py-3">
                        <h1>Need Proof ?</h1>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src={showCaseImage} className="img-fluid" width="700px"/>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center ">
                        <div className="d-flex flex-column mx-3">
                            <img className="align-self-start pb-2" src={quoteMark} width="44px"/>
                            <p className="lead testimonialText">Working with Bradley is amazing! He understands my business, what my clients want and he provides great results.</p>

                            <div className="d-flex align-items-center">
                                <img className="img-fluid roundImg" src={joshImage} width="100px" />
                                <ul className="clientDetails">
                                    <li><strong>Josh Cooke</strong></li>
                                    <li>Executive - SPACE_ Events Venue</li>
                                    <li><a href="https://spaceevents.co.za" target="blank">www.spaceevents.co.za</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}