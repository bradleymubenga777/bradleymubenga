//React Modules
import React, { Component } from 'react';

//SCSS
import '../../scss/buttons.scss';

//React Class Based Component
export default class fillButton extends Component {
    render() {
        return (
            //****Use NavLink From React Router DOM Here Instead.
            <button className="fillBtn">Start A Project</button>
        )
    }
}
