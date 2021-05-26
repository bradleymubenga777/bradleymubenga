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
        <a className="navbar-brand ml-5" href="/"><img alt="bradley mubenga logo" src={logo} className="img-fluid" width="150"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbarLinks d-flex align-items-center">
                <li className="nav-item  mr-5 d-flex">
                    <NavLink className="nav-link p-0" exact to="/" activeClassName="activeLink">Home</NavLink>
                </li>
                <li className="nav-item mr-5">
                    <NavLink className="nav-link p-0" exact to="/about" activeClassName="activeLink">About</NavLink>
                </li>
                <li className="nav-item mr-5">
                    <NavLink className="nav-link p-0" exact to="/portfolio" activeClassName="activeLink">Portfolio</NavLink>
                </li>
                <li className="nav-item mr-5">
                    <NavLink className="nav-link p-0" exact to="/blog" activeClassName="activeLink">Blog</NavLink>
                </li>
                <li className="nav-item mr-5">
                    <FillButton />
                </li>
            </ul>
        </div>
        </nav>
    )
}
