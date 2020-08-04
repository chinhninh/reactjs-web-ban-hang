import React, { Component } from 'react';
import './Cart.scss';
import {NavLink} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

class Cart extends Component {
    render() {
        return (
            <div className="style-cart">
                <NavLink to="/cart">
                    <i><FaShoppingCart /></i>
                    <span>Cart</span>
                </NavLink>
                <div className="cart-number">
                    12
                </div>
            </div>
        );
    }
}

export default Cart;