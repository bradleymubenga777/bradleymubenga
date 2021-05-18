//React Modules
import React from 'react';

//SCSS
import '../../../scss/strategySection.scss';

//Assets
import bradleyMubengaImage from '../../../assets/images/bradley-mubenga-picture.jpeg';
import facebookIcon from '../../../assets/svg/facebook.svg';
import linkedInIcon from '../../../assets/svg/github.svg';
import githubIcon from '../../../assets/svg/linkedin-in.svg';
import { NavLink } from 'react-router-dom';

//React Functional Component
export default function strategySection() {
    return (
        <section className="container d-flex justify-content-center py-5">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center">
               <img src={bradleyMubengaImage} className="img-fluid" width="350px"/> 
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center strategyContent">
                <h1>Strategy {'>'} Design</h1>
                <p className="lead">Bradley ensures your website brings growth to your business by using a strategy that will set you apart from your competition.</p>

                <p className="lead">Want to learn more about me? Check out the <NavLink className="underlinedLink" to="/">about page</NavLink> for all the fun facts {'&'} tech stuff. For my work checkout the <NavLink className="underlinedLink" to="/">portfolio</NavLink>.</p>

                <div className="d-flex justify-space-between socialIcons">
                    <a href="/" target="blank"><img src={linkedInIcon} width="25px" /></a>
                    <a href="/" target="blank"><img src={facebookIcon} width="25px" className="mx-3"/></a>
                    <a href="/" target="blank"><img src={githubIcon} width="25px"/></a>
                </div>
            </div>
        </section>
    )
}
