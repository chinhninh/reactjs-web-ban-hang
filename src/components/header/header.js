import React, { Component } from 'react';
import './Header.scss';
import logo from "../../images/appIcon/ic_logo.png";
import { NavLink } from 'react-router-dom';
import Search from './search/Search';
import User from './user/User';
import Cart from './cart/Cart';
import HeaderMobile from './headerMobile/HeaderMobile';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        {/* header pc */}
                        <div className="row">
                            {/* logo */}
                            <div className="col-1">
                                <div className="logo">
                                    <NavLink to="/">
                                        <img src={logo} />
                                    </NavLink>
                                </div>
                            </div>
                            {/* button header */}
                            <div className="col-5">
                                <div className="btn-header">
                                    <ul className="list-group list-group-horizontal">
                                        <li>
                                            <NavLink to="/">
                                                Home
                                        </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">
                                                Contact
                                        </NavLink>
                                        </li>
                                        <li>
                                            <Search />
                                        </li>
                                        <li>
                                            <Cart />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* right header */}
                            <div className="col-6">
                                <div className="right-header">
                                    <ul className="list-group list-group-horizontal">
                                        <li>
                                            <User />
                                        </li>
                                        <li>
                                            <NavLink to="/login">
                                                Login
                                        </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/register">
                                                Register
                                        </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header mobile */}
                <div className="header-mobile">
                    <HeaderMobile />
                </div>
            </div>
        );
    }
}

export default Header;