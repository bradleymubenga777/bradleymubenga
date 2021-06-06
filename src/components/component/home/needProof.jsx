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
                        <img alt="space events website showcase" src={showCaseImage}/>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center pt-3">
                        <div className="d-flex flex-column mx-3">
                            <img alt="quote mark png" className="align-self-start pb-2" src={quoteMark} width="44px"/>
                            <p className="lead testimonialText">Working with Bradley is amazing! He understands my business, what my clients want and he provides great results.</p>

                            <div className="d-flex flex-wrap align-items-center justify-content-center">
                                <img alt="Josh Cooke" className="roundImg py-3" src={joshImage} width="100px" />
                                <ul className="clientDetails">
                                    <li><strong>Josh Cooke</strong></li>
                                    <li>Executive <br/> SPACE_ Events Venue</li>
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
