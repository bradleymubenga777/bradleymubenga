//React Modules
import React from 'react';

//SCSS
import '../../../scss/needProof.scss';

//Assets
import lukeImage from '../../../assets/images/bradley-mubenga-picture.jpeg';
import showCaseImage from '../../../assets/images/bradley-mubenga-picture.jpeg';
import quoteMark from '../../../assets/svg/quote-left.svg';

//React Functional Component
export default function needProof() {
    return (
        <section className="needProofSection py-4">
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center headerText py-3">
                        <h1>Need Proof?</h1>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src={showCaseImage} className="img-fluid" width="450px"/>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center">
                        <img className="align-self-start pb-2" src={quoteMark} width="44px"/>
                        <p className="lead testimonialText">Working with Bradley is amazing! He understands my business, what my clients want and he provides great results.</p>

                        <div className="d-flex align-items-center">
                            <img className="img-fluid roundImg" width="77px" src={lukeImage} />
                            <ul className="clientDetails">
                                <li>Luke McGowan</li>
                                <li><strong>Executive</strong> - SPACE_ Events Venue</li>
                                <li><a href="https://spaceevents.co.za" target="blank">www.spaceevents.co.za</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
