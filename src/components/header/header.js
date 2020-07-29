import React, { Component } from 'react';
import './Header.scss';
import logo from "../../images/appIcon/ic_logo.png";
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        {/* logo */}
                        <div className="col-1">
                            <div className="logo">
                                <img src={logo} />
                            </div>
                        </div>
                        {/* button header */}
                        <div className="col-5">
                            <div className="btn-header">
                                <ul className="list-group list-group-horizontal">
                                    <li>
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i><FaSearch /></i>
                                            <span>Search</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i><FaShoppingCart /></i>
                                            <span>Cart</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* right header */}
                        <div className="col-6">
                            <div className="right-header">
                                <ul className="list-group list-group-horizontal">
                                    <li>
                                        <a href="#">
                                            <i><FaUser /></i>
                                            <span>Phan Chinh Ninh</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Register
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;