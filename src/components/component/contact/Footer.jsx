//React Modules
import React from 'react';
import { NavLink } from 'react-router-dom';

//SCSS
import '../../../scss/footer.scss';

//Assets
import logo from '../../../assets/svg/bradley-mubenga-logo.png';

export default function Footer() {
    return (
        <footer className="footer py-3 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <img alt="bradley-mubenga-logo" src={logo} width="200px"/>

                <div>
                    <div>
                        <ul className="d-flex flex-row p-0">
                            <li className="mr-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mx-2"><NavLink to="/about">About</NavLink></li>
                            <li className="mx-2"><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li className="ml-2"><NavLink to="/contact">Start a Project</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}