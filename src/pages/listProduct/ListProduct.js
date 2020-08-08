import React, { Component } from 'react';
import './ListProduc.scss';
import Api from '../../api/Api';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PRODUCT_BY_TYPE_REQUEST } from '../../redux/actions/productByType/actionType';

class ListProduct extends Component {
    componentDidMount = () => {
        const idType = parseInt(this.props.match.params.id);
        const { dataProductByType } = this.props;
        const idTypeAndPage = {
            idType,
            page: 1
        }
        dataProductByType(idTypeAndPage)
    }

    render() {
        const { dataType, dataProductByType_1 } = this.props;
        const idType = parseInt(this.props.match.params.id);
        const dataIdType = dataType.find(e => e.id == idType)

        let showDataListProduct;
        if (dataProductByType_1 != null) {
            showDataListProduct = dataProductByType_1.map(e => (
                <div className="col-md-3 col-sm-6" key={e.id}>
                    <div className="content-product">
                        <NavLink to={`/product-detail/${e.id}`}>
                            <img src={`${Api}api-ban-hang/images/product/${e.images[0]}`} />
                        </NavLink>
                        <NavLink to={`/product-detail/${e.id}`}>
                            <h5>{e.name}</h5>
                        </NavLink>
                        <p className="price">{e.price}$</p>
                        <p className="material">Material {e.material}</p>
                        <div className="color">
                            <ul className="list-group list-group-horizontal">
                                <li>
                                    Color {e.color}
                                </li>
                                <li className="bg-color" style={{ backgroundColor: e.color }}>
                                    <div></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))
        } else { showDataListProduct = <div>Not found list product!</div> }

        return (
            <div className="list-product">
                <div className="container">
                    <div>
                        <h1>
                            {dataIdType ? dataIdType.name : ""}
                        </h1>
                        <div className="row">
                            {showDataListProduct}

                            {/* <div className="col-md-3 col-sm-6">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataType: state.productType.dataType,
        dataProductByType_1: state.productByType.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataProductByType: (idTypeAndPage) => dispatch({ type: PRODUCT_BY_TYPE_REQUEST, payload: idTypeAndPage })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);