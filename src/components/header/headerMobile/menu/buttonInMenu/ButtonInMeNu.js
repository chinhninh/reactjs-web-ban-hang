import React, { Component } from 'react';
import './ButtonInMeNu.scss';
import { NavLink } from 'react-router-dom';

class ButtonInMeNu extends Component {
    render() {
        return (
            <div className="btn-in-menu">
                <ul>
                    <li>
                        <NavLink id="home" className="menu-item" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink id="contact" className="menu-item" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ButtonInMeNu;