import React, { Component } from 'react';
import './HeaderMobile.scss';
import logo from '../../../images/appIcon/ic_logo.png';
import Search from './search/Search';
// import User from './user/User';
import Cart from './cart/Cart';
import MenuMobile from './menu/Menu';
import { NavLink } from 'react-router-dom';

class HeaderMobile extends Component {
    render() {
        return (
            <div className="header-mobile">
                {/* menu */}
                <MenuMobile />
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} />
                    </NavLink>
                </div>
                <div className="row">
                    <div className="col-6"></div>
                    {/* button search and cart */}
                    <div className="col-6">
                        <div className="btn-search-cart">
                            <ul className="list-group list-group-horizontal">
                                <li>
                                    <Search />
                                </li>
                                <li>
                                    <Cart />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMobile;