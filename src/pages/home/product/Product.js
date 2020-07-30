import React, { Component } from 'react';
import './Product.scss';
import sp1 from '../../../images/temp/sp1.jpeg';
import sp2 from '../../../images/temp/sp2.jpeg';
import sp3 from '../../../images/temp/sp3.jpeg';
import sp4 from '../../../images/temp/sp4.jpeg';
import sp5 from '../../../images/temp/sp5.jpeg';
import { NavLink } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <div className="product">
                <h1>
                    TOP PRODUCT
                </h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp1} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp5} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp4} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp3} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp1} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp2} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="">
                                <img src={sp3} />
                            </NavLink>
                            <NavLink to="">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;