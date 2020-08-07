import React, { Component } from 'react';
import './CartProduct.scss';
import {connect} from 'react-redux';
import Api from '../../../api/Api';

class CartProduct extends Component {
    render() {
        const {dataCart} = this.props;

        let showDataCart;
        if (dataCart) {
            showDataCart = dataCart.map(e => (
                <div className="cart-product">
                <div className="row">
                    <div className="col-2">
                        <div className="image-product-cart">
                            <img src={`${Api}api-ban-hang/images/product/${e.images[0]}`} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="info-product-cart" key={e.id}>
                            <h5>
                                {e.name}
                            </h5>
                            <p className="price">
                                {e.price}$
                            </p>
                            <div className="amount">
                                <ul className="list-group list-group-horizontal">
                                    <li>
                                        <a href="#">
                                            -
                                        </a>
                                    </li>
                                    <li>
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            +
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="show-detail">
                                <a href="#">
                                    SHOW DETAIL
                                </a>
                            </div>
                            <div className="btn-delete">
                                <button className="btn">
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))
        } else {showDataCart = ""}

        return (
            <div>
                {showDataCart}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataCart: state.cart.data
    }
}

export default connect(mapStateToProps)(CartProduct);