import React, { Component } from 'react';
import './InfoProduct.scss';
import {NavLink} from 'react-router-dom';

class InfoProduct extends Component {
    render() {
        return (
            <div className="info-product">
                <div className="title-price">
                    <span>BLACK OF THE</span>
                    <strong>/ 124$</strong>
                </div>
                <p className="info-product">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                <div className="color-product">
                    <ul className="list-group list-group-horizontal">
                        <li>
                            Material RoyalBlue
                                            </li>
                        <li className="color">
                            <span>Color Khaki</span>
                            <div className="bg-color"></div>
                        </li>
                    </ul>
                </div>
                <NavLink to="" className="btn btn-cart">
                    Add to card
                                        </NavLink>
            </div>
        );
    }
}

export default InfoProduct;