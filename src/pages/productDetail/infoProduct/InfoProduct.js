import React, { Component } from 'react';
import './InfoProduct.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  {addToCart} from '../../../redux/actions/cart/cartCreator';

class InfoProduct extends Component {
    clickAddToCart = () => {
        const {addToCart} = this.props;
        const { dataProductDetail } = this.props;
        dataProductDetail.map(e => e.quantity = 1)
        addToCart(dataProductDetail);
    }

    render() {
        const { dataProductDetail } = this.props;
 
        let getDataIDProduct;
        if (dataProductDetail) {
            getDataIDProduct = dataProductDetail.map(e => <div>
                <div className="title-price">
                    <span>{e.nameProduct}</span>
                    <strong>/ {e.price}$</strong>
                </div>
                     <p className="info-product">
                        {e.description}
                     </p>
                <div className="color-product">
                    <ul className="list-group list-group-horizontal">
                        <li>
                            Material {e.material}
                                            </li>
                        <li className="color">
                            <span>Color {e.color}</span>
                            <div className="bg-color" style={{backgroundColor: e.color}}></div>
                        </li>
                    </ul>
                </div>
                <NavLink to="/cart" className="btn btn-cart" onClick={this.clickAddToCart.bind(this)}>
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
        idProduct: state.productDetail.id,
        dataProductDetail: state.productDetail.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (dataIdProduct) => dispatch(addToCart(dataIdProduct))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoProduct);