import React, { Component } from 'react';
import './InfoProduct.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  {addToCart} from '../../../redux/actions/cart/cartCreator';

class InfoProduct extends Component {
    clickAddToCart = () => {
        const {addToCart} = this.props;
        const { idProduct, dataProduct } = this.props;
        const dataIdProduct = dataProduct.find(item => item.id == idProduct);
        dataIdProduct.quantity =  1
        addToCart(dataIdProduct);
    }

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
                            <div className="bg-color" style={{backgroundColor: dataIdProduct.color}}></div>
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
        idProduct: state.productDetail.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (dataIdProduct) => dispatch(addToCart(dataIdProduct))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoProduct);