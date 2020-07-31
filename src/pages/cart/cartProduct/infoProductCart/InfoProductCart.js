import React, { Component } from 'react';
import './InfoProductCart.scss';

class InfoProductCart extends Component {
    render() {
        return (
            <div className="info-product-cart">
                <h5>
                    Lace Sleeve Si
                </h5>
                <p className="price">
                    117$
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
        );
    }
}

export default InfoProductCart;