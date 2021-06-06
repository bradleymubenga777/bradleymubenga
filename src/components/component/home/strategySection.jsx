//React Modules
import React from 'react';

//SCSS
import '../../../scss/strategySection.scss';

//Assets
import bradleyMubengaImage from '../../../assets/images/bradley-mubenga-picture.jpeg';
import facebookIcon from '../../../assets/svg/facebook.svg';
import githubIcon from '../../../assets/svg/github.svg';
import linkedInIcon from '../../../assets/svg/linkedin-in.svg';
import { NavLink } from 'react-router-dom';

//React Functional Component
export default function strategySection() {
    return (
        <section className="container d-flex justify-content-center py-5">
            <div className="row py-3">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center">
                <img alt="bradley mubenga" src={bradleyMubengaImage}/> 
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center strategyContent pt-3">
                    <h1>Strategy {'>'} Design</h1>
                    <p className="lead">Bradley ensures your website brings growth to your business by using a strategy that will set you apart from your competition.</p>

                    <p className="lead">Want to learn more about me? Check out the <NavLink className="underlinedLink" to="/about">about page</NavLink> for all the fun facts {'&'} tech stuff. For my work checkout the <NavLink className="underlinedLink" to="/portfolio">portfolio</NavLink>.</p>

                    <div className="d-flex justify-space-between socialIcons">
                        <a href="https://github.com/bradleymubenga777" target="blank"><img alt="github icon" src={githubIcon} width="25px"/></a>
                        <a href="https://facebook.com/bradleymubenga1" target="blank"><img alt="facebook icon" src={facebookIcon} width="25px" className="mx-3"/></a>
                        <a href="https://linkedin.com/in/bradley-mubenga" target="blank"><img alt="linkedIn icon" src={linkedInIcon} width="25px"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
