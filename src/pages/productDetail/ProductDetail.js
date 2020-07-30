import React, { Component } from 'react';
import './ProductDetail.scss';
import sp1 from '../../images/temp/sp1.jpeg';
import sp2 from '../../images/temp/sp2.jpeg';

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
                                    <div>
                                        <img src={sp1}/>
                                        <img src={sp2}/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">

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