import React, { Component } from 'react';
import './Checkout.scss';

class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <p>
                Total: 
                <span>500$</span>
                </p>
                <div className="btn-checkout">
                    <button className="btn">
                        CHECKOUT
                    </button>
                </div>
            </div>
        );
    }
}

export default Checkout;