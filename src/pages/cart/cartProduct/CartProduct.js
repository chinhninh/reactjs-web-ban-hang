import React, { Component } from 'react';
import ImageProductCart from './ImageProductCart/ImageProductCart';
import InfoProductCart from './infoProductCart/InfoProductCart';
import './CartProduct.scss';

class CartProduct extends Component {
    render() {
        return (
            <div>
                <div className="cart-product">
                    <div className="row">
                        <div className="col-2">
                            <ImageProductCart />
                        </div>
                        <div className="col-10">
                            <InfoProductCart />
                        </div>
                    </div>
                </div>
                <div className="cart-product">
                    <div className="row">
                        <div className="col-2">
                            <ImageProductCart />
                        </div>
                        <div className="col-10">
                            <InfoProductCart />
                        </div>
                    </div>
                </div>
                <div className="cart-product">
                    <div className="row">
                        <div className="col-2">
                            <ImageProductCart />
                        </div>
                        <div className="col-10">
                            <InfoProductCart />
                        </div>
                    </div>
                </div>
                <div className="cart-product">
                    <div className="row">
                        <div className="col-2">
                            <ImageProductCart />
                        </div>
                        <div className="col-10">
                            <InfoProductCart />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;