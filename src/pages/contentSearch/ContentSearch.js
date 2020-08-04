import React, { Component } from 'react';
import "./ContentSearch.scss";
import {NavLink} from 'react-router-dom';
import sp1 from '../../images/temp/sp1.jpeg';
import sp2 from '../../images/temp/sp2.jpeg';
import sp3 from '../../images/temp/sp3.jpeg';
import sp4 from '../../images/temp/sp4.jpeg';
import sp5 from '../../images/temp/sp5.jpeg';

class ContentSearch extends Component {
    render() {
        return (
            <div className="content-search">
                <div className="container">
                    <div>
                        <h1>
                            Search "product"
                    </h1>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp1} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp5} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp4} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp3} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp1} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp2} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="content-product">
                                    <NavLink to="/product-detail">
                                        <img src={sp3} />
                                    </NavLink>
                                    <NavLink to="/product-detail">
                                        <h5>BLACK OF THE</h5>
                                    </NavLink>
                                    <p className="price">124$</p>
                                    <p className="material">Material sick</p>
                                    <div className="color">
                                        <ul className="list-group list-group-horizontal">
                                            <li>
                                                Color RoyalBlue
                                            </li>
                                            <li className="bg-color">
                                                <div></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentSearch;