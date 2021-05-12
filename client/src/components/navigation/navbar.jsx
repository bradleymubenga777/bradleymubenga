//React Modules
import React from 'react';

//Assets
import logo from '../../assets/svg/bradley-mubenga-logo.svg';

//React Components
import FillButton from '../buttons/fill-btn';

//SCSS
import '../../scss/navbar.scss';

//React Functional Component
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top mx-4">
        <a className="navbar-brand" href="#"><img src={logo} className="img-fluid" width="150"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbarLinks d-flex align-items-center">
                <li className="nav-item active activeLink mx-3">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item mx-3">
                    <FillButton />
                </li>
            </ul>
        </div>
        </nav>
    )
}
