import React, { Component } from 'react';
import './ProductDetail.scss';
import { NavLink } from 'react-bootstrap';
import ImageDetail from './imageDetail/ImageDetail';
import InfoProduct from './infoProduct/InfoProduct';

class ProductDetail extends Component {
    render() {
        return (
            <div className="product-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-12"></div>
                        <div className="col-md-10 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <ImageDetail/>
                                </div>
                                <div className="col-md-6 col-12">
                                    <InfoProduct/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 col-12"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;