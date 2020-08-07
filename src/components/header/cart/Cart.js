import React, { Component } from 'react';
import './Cart.scss';
import {NavLink} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import {connect} from 'react-redux';

class Cart extends Component {
    render() {
        const {dataCart} = this.props;
        return (
            <div className="style-cart">
                <NavLink to="/cart">
                    <i><FaShoppingCart /></i>
                    <span>Cart</span>
                </NavLink>
                <div className="cart-number">
                    {dataCart? dataCart.length: ""}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataCart: state.cart.data
    }
}

export default connect(mapStateToProps)(Cart);