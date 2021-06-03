//REACT Modules
import React from 'react';

//Assets
import githubIcon from '../../../assets/svg/github.svg';

//SCSS
import '../../../scss/workExperience.scss';


export default function WorkExperience() {
    return (
        <section className="container py-5">
            <h1 className="text-center">Work Experience</h1>

            <div className="row py-4">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center jobBlock">
                    <h2>SPACE EVENTS VENUE</h2>
                    <h4>Font-end Developer</h4>
                    <p>May 2021 - Present</p>
                    <a className="linkColor" href="https://spaceevents.co.za" rel="noreferrer" target="_blank">www.spaceevents.co.za</a>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 borderLeft">
                    <p>I help manage SPACE_'s WordPress website by consistently updating it's content and design to make sure clients have the best experience possible.</p>

                    <p>I was exposed to WordPress development and I gained the knowledge and experience needed to customise and enhance a Wordpress website.</p>
                </div>
            </div>

            <div className="row py-4">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center jobBlock">
                    <h2>INDLELA MEDIA (startup)</h2>
                    <h4>Full-stack Web Developer</h4>
                    <p>Jan 2020 - Apr 2021</p>
                    <a className="linkColor" href="https://indlelamedia.com" rel="noreferrer" target="_blank">www.indlelamedia.com</a>

                    <div className="d-flex justify-space-between pt-2">
                        <a href="https://github.com/indlela-media/CSRspace" target="blank"><img alt="" src={githubIcon} width="25px"/></a>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 borderLeft">
                    <p>With a team of developers we created a web application that helps NPO's to find sponsors who are willing to help them achieve their goals.</p>

                    <p>Working at Indlela Media is a privilage as I have learned how to communicate effectively with developers in our team and work within deadlines.</p>
                </div>
            </div>

            <div className="row py-4">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center jobBlock">
                    <h2>SELF-EMPLOYED</h2>
                    <h4>Freelance Web-Developer {'&'} Strategist</h4>
                    <p>2021 - Present</p>
                    <a className="linkColor" href="https://bradleymubenga.co.za" rel="noreferrer" target="_blank">www.bradleymubenga.co.za</a>

                    <div className="d-flex justify-space-between pt-2">
                        <a href="https://github.com/bradleymubenga777" target="blank"><img alt="" src={githubIcon} width="25px"/></a>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 borderLeft">
                    <p>Ensuring that entreprenurs experience growth in their business whilst giving them more time to work on what they love doing.</p>

                    <p>My experience as a freelance web developer has taught me how to think strategically about my client's users and how to give them the best experience possible.</p>
                </div>
            </div>
        </section>
    )
}
