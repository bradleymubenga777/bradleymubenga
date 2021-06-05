//React Modules
import React from 'react';
import { NavLink } from 'react-router-dom';

//Assets
import logo from '../../assets/svg/bradley-mubenga-logo.svg';

//React Components
import { FillButton } from '../buttons/buttons';

//SCSS
import '../../scss/navbar.scss';

//React Functional Component
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navClass">
        <a className="navbar-brand" href="/"><img alt="bradley mubenga logo" src={logo} className="img-fluid" width="150"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">ONE</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbarLinks d-flex align-items-center">
                <li className="nav-item  mr-5 mt-3 d-flex">
                    <NavLink className="nav-link p-0" exact to="/" activeClassName="activeLink"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Home</NavLink>
                </li>
                <li className="nav-item mr-5 mt-3">
                    <NavLink className="nav-link p-0" exact to="/about" activeClassName="activeLink" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">About</NavLink>
                </li>
                <li className="nav-item mr-5 mt-3">
                    <NavLink className="nav-link p-0" exact to="/portfolio" activeClassName="activeLink" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Portfolio</NavLink>
                </li>
                <li className="nav-item mr-5 my-4">
                    <FillButton />
                </li>
            </ul>
        </div>
        </nav>
    )
}
