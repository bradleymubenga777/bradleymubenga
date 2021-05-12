//React Modules
import React, { Component } from 'react';

//SCSS
import '../../scss/buttons.scss';

//React Class Based Components
export class FillButton extends Component {
    render() {
        return (
            //****Use NavLink From React Router DOM Here Instead.
            <button className="fillBtn">Start A Project</button>
        )
    }
}

export class WhiteBtn extends Component {
    render() {
        return (
            //****Use NavLink From React Router DOM Here Instead.
            <button className="whiteBtn">Start A Project</button>
        )
    }
}

export class BlackBtn extends Component {
    render() {
        return (
            //****Use NavLink From React Router DOM Here Instead.
            <button className="blackBtn">Portfolio</button>
        )
    }
}
