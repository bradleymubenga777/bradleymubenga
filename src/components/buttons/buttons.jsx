//React Modules
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//SCSS
import '../../scss/buttons.scss';

//React Class Based Components
export class FillButton extends Component {
    render() {
        return (
            <NavLink className="fillBtn" to="/contact">Start A Project</NavLink>
        )
    }
}

export class PortfolioBtn extends Component {
    render() {
        return (
            <NavLink className="fillBtn" to="/portfolio">Portfolio</NavLink>
        )
    }
}

export class WhiteBtn extends Component {
    render() {
        return (
            <NavLink className="whiteBtn" to="/contact">Start A Project</NavLink>
        )
    }
}

export class BlackBtn extends Component {
    render() {
        return (
            <NavLink className="blackBtn" to="/portfolio">Portfolio</NavLink>
        )
    }
}

export class FormSubmitButton extends Component {
    render() {
        return (
            <button className="fillBtn">Get Started</button>
        )
    }
}

export function ReadMore({link}) {
    return (
    <NavLink className="fillBtn" to={link}>Read More</NavLink>
    )
}

