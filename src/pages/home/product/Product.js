import React, { Component } from 'react';
import './Product.scss';
import sp1 from '../../../images/temp/sp1.jpeg';
import sp2 from '../../../images/temp/sp2.jpeg';
import sp3 from '../../../images/temp/sp3.jpeg';
import sp4 from '../../../images/temp/sp4.jpeg';
import sp5 from '../../../images/temp/sp5.jpeg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Product extends Component {
    render() {
        const { dataProduct, loadingProductType } = this.props;
        console.log("product: ",dataProduct)

        let dataProduct_1;
        if (dataProduct == [] || dataProduct == null) { dataProduct_1 = <div>loading...</div> }
        else {
            dataProduct_1 = dataProduct.map((item, i) => {
                // console.log(item.price)
                <div className="content-product">
                    <NavLink to="/product-detail">
                        <img src={sp1} />
                    </NavLink>
                    <NavLink to="/product-detail">``
                        <h5>{item.name}</h5>
                    </NavLink>
                    <p>{item.price}$</p>
                </div>
            })
        }
        return (
            <div className="product">
                <h1>
                    TOP PRODUCT
                </h1>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        {dataProduct_1}
                    </div>

                    {/* <div className="col-md-3 col-sm-6">
                        <div className="content-product">
                            <NavLink to="/product-detail">
                                <img src={sp1} />
                            </NavLink>
                            <NavLink to="/product-detail">
                                <h5>BLACK OF THE</h5>
                            </NavLink>
                            <p>124$</p>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataProduct: state.productType.dataProduct,
        loadingProductType: state.productType.loading
    }
}

export default connect(mapStateToProps)(Product);