//React Modules
import React from 'react';

//Assets
import logo from '../../assets/svg/bradley-mubenga-logo.svg';

//SCSS
import '../../scss/navbar.scss';

//React Functional Component
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top mx-4">
        <a class="navbar-brand" href="#"><img src={logo} class="img-fluid" width="150"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbarLinks">
                <li class="nav-item active activeLink mx-3">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">BTN COMPONENT</a>
                </li>
            </ul>
        </div>
        </nav>
    )
}
