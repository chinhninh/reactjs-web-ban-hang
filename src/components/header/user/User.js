import React, { Component } from 'react';
import './User.scss';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class User extends Component {
    render() {
        return (
            <div>
                <div className="btn-user">
                    <a href="#">
                        <i><FaUser /></i>
                        <span>Phan Chinh Ninh</span>
                    </a>
                    <ul class="menu-btn-user">
                        <li class="dropdown-item">
                            <NavLink to="/order-history">Order history</NavLink>
                        </li>
                        <li class="dropdown-item">
                            <NavLink to="/change-info">Change info</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default User;