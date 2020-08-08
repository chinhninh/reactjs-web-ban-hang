import React, { Component } from 'react';
import './CartProduct.scss';
import { connect } from 'react-redux';
import Api from '../../../api/Api';
import { incQuantity, decQuantity, deleteCart } from '../../../redux/actions/cart/cartCreator';
import { Link } from 'react-router-dom';

class CartProduct extends Component {

    render() {
        const { dataCart, incQuantity_1, decQuantity_1, deleteCart_1 } = this.props;
        console.log(dataCart)

        let showDataCart;
        if (dataCart) {
            showDataCart = dataCart.map(e => (
                <div className="cart-product" key={e.id}>
                    <div className="row">
                        <div className="col-2">
                            <div className="image-product-cart">
                                <img src={`${Api}api-ban-hang/images/product/${e.images[0]}`} />
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="info-product-cart" >
                                <h5>
                                    {e.name}
                                </h5>
                                <p className="price">
                                    {e.price}$
                            </p>
                                <div className="amount">
                                    <ul className="list-group list-group-horizontal">
                                        <li>
                                            <a className="btn" onClick={() => decQuantity_1(e.id)}>
                                                -
                                        </a>
                                        </li>
                                        <li className="quantity">
                                            <span>{e.quantity}</span>
                                        </li>
                                        <li>
                                            <a className="btn" onClick={() => incQuantity_1(e.id)}>
                                                +
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="show-detail">
                                    <Link to={`/product-detail/${e.id}`}>
                                        SHOW DETAIL
                                </Link>
                                </div>
                                <div className="btn-delete">
                                    <button className="btn" onClick={() => deleteCart_1(e.id)}>
                                        X
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        } else { showDataCart = "" }

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

const mapDispatchToProps = (dispatch) => {
    return {
        incQuantity_1: (id) => dispatch(incQuantity(id)),
        decQuantity_1: (id) => dispatch(decQuantity(id)),
        deleteCart_1: (id) => dispatch(deleteCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);