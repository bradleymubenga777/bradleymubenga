//
import React from 'react';

//Assets
import spaceEventsWebsite from '../../../assets/images/portfolio/space-events-website-showcase-1.jpeg';
import spaceEventsMobileWebsite from '../../../assets/images/portfolio/space-events-showcase-1.jpeg';
import spaceEventsOldWebsite from '../../../assets/images/portfolio/old-space-events-website.jpeg';

//SCSS
import '../../../scss/spaceCaseStudy.scss';


export default function SpaceCaseStudy() {
    return (
        <main className="py-5 my-5">
            <div className="container">
                <h1>Space Events Venue</h1>
                <p className="lead">An elegant website to complement a venue with beautiful architecture.</p>

                <div>
                    <img src={spaceEventsWebsite} className="img-fluid" alt="space-events-venue-website" />

                    <div className="pt-3">
                        <p className="lead">Space Events Venue is a beautiful an elagant venue for any formal or casual event, however prior to improving their website it did not reflect much of what the venue could offer to prospective clients.</p>

                        <p className="lead">At the time website looked decent but needed an extra touch to catch the attention of propects, the picture below illustrates the problems that I found in the website's design and layout and a few suggestions that would help enhance the website.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1>Before</h1>

                <div>
                    <img src={spaceEventsOldWebsite} className="img-fluid" alt="space-events-venue-website" />

                    <div className="pt-3">
                        <p className="lead">After a brief discussion with the lead web designer and the man in charge of the venue, I was given the go ahead to make these changes. I was very glad since this meant that the venue would see more client come in because of this.</p>

                        <p className="lead">I went ahead and made the changes outlined in the picture above, it took me about a week to complete these changes. Below you'll find the showcase of the website with the change made, notice how it has enchanced the website's aesthetic.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1>After</h1>

                <div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <img src={spaceEventsWebsite} className="img-fluid" alt="space-events-venue-website" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <img src={spaceEventsMobileWebsite} className="img-fluid" alt="space-events-venue-website" />
                        </div>
                    </div>

                    <div className="pt-3">
                        <p className="lead">After making these changes the venue has seen more people enquire and make bookings through the webiste, the website now works as a tool that attracts more clients for this business.</p>

                        <p className="lead">Thanks for reading this case study! If you'd like to know more about how you can do the same for your business feel free to contact me via the contact details below I'd love to help you solve your problem, talk soon!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
