import React, { Component } from 'react';
import './Cart.scss';
import CartProduct from './cartProduct/CartProduct';
import Checkout from './checkout/Checkout';

class Cart extends Component {
    render() {
        return (
            <div>
                <div className="container cart">
                    <CartProduct />
                    <Checkout/>
                </div>
            </div>
        );
    }
}

export default Cart;