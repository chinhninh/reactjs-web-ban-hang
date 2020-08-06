import React, { Component } from 'react';
import './InfoProduct.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class InfoProduct extends Component {
    render() {
        const { idProduct, dataProduct } = this.props;
        const dataIdProduct = dataProduct.find(item => item.id == idProduct) // or const dataIdProduct = dataProduct.filter(item => item.id == idProduct);
 
        let getDataIDProduct;
        if (dataIdProduct) {
            getDataIDProduct = (<div>
                <div className="title-price">
                    <span>{dataIdProduct.name}</span>
                    <strong>/ {dataIdProduct.price}$</strong>
                </div>
                     <p className="info-product">
                        {dataIdProduct.description}
                     </p>
                <div className="color-product">
                    <ul className="list-group list-group-horizontal">
                        <li>
                            Material {dataIdProduct.material}
                                            </li>
                        <li className="color">
                            <span>Color {dataIdProduct.color}</span>
                            <div className="bg-color"></div>
                        </li>
                    </ul>
                </div>
                <NavLink to="" className="btn btn-cart">
                    Add to card
                </NavLink>
            </div>)
        } else { getDataIDProduct = <div className="text-center">Not infomation!</div> }

        return (
            <div className="info-product">
                {getDataIDProduct}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataProduct: state.productType.dataProduct,
        idProduct: state.productDetail.id
    }
}

export default connect(mapStateToProps)(InfoProduct);