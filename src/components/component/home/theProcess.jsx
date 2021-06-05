//REACT Modules
import React from 'react';

//SCSS

//Assets
import bowAndArrow from '../../../assets/images/bowAndArrow.png';
import skyDiver from '../../../assets/images/skyDiver.png';
import trophy from '../../../assets/images/trophy.png';

export default function TheProcess() {
    return (
        <section className="pb-5 pt-3">
            <div className="mx-5 text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div>
                            <img className="img-fluid" width="150px" alt="bow-and-arrow-sketch" src={bowAndArrow}/>
                            <h2>1. Strategy</h2>
                            <p className="lead">We discover problems, put together a strategy that will solve them to bring growth to your business</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div>
                            <img className="img-fluid" width="150px" alt="sky-diver-sketch" src={skyDiver}/>
                            <h2>2. Development</h2>
                            <p className="lead">Our plans are put into action as we design, develop and perfect a solution for your business.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div>
                            <img className="img-fluid" width="150px" alt="trophy-sketch" src={trophy}/>
                            <h2>3. Marketing</h2>
                            <p className="lead">Finally we make sure you stand out from the competition, providing a unique experience for your customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
