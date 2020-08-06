import React, { Component } from 'react';
import './Product.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Api from '../../../api/Api';

class Product extends Component {
    render() {
        const { dataProduct, loadingProductType } = this.props;
        // console.log("product: ",dataProduct)

        let dataProduct_1;
        if (dataProduct == [] || dataProduct == null) { dataProduct_1 = <div>loading...</div> }
        else {
            dataProduct_1 = dataProduct.map((item, i) => (
                <div className="col-md-3 col-sm-6" key={item.id}>
                    <div className="content-product">
                        <NavLink to={`/product-detail/${item.id}`}>
                            <img src={`${Api}api-ban-hang/images/product/${item.images[0]}`} />
                        </NavLink>
                        <NavLink to={`/product-detail/${item.id}`}>
                        <h5>{item.name.toUpperCase()}</h5>
                        </NavLink>
                        <p>{item.price}$</p>
                    </div>
                </div>
            ))
        }

        return (
            <div className="product">
                <h1>
                    TOP PRODUCT
                </h1>
                <div className="row">
                        {dataProduct_1}

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