import React, { Component } from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';

class Checkout extends Component {
    render() {
        const { dataCart } = this.props;

        let totalPrice = 0;
        if (dataCart.length > 0) {
            for (let i = 0; i < dataCart.length; i++) {
                totalPrice += parseInt(dataCart[i].price) * parseInt(dataCart[i].quantity)
            }
        } else { totalPrice = "" }

        return (
            <div className="checkout">
                <p>
                    Total:
                <span>{totalPrice}$</span>
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

const mapStateToProps = (state) => {
    return {
        dataCart: state.cart.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);