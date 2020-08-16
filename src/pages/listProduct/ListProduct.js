import React, { Component } from 'react';
import './ListProduc.scss';
import Api from '../../api/Api';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PRODUCT_BY_TYPE_REQUEST } from '../../redux/actions/productByType/actionType';
import PaginationProduct from './Pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PRODUCT_TYPE_REQUEST } from '../../redux/actions/productType/actionType';
import queryString from 'query-string';

class ListProduct extends Component {
    componentDidMount = () => {
        const idType = parseInt(this.props.match.params.id);
        const { dataProductByType, getProductType } = this.props;
        let dataParamsUrl = queryString.parse(this.props.location.search)
        let paramPage = dataParamsUrl.page
        const idTypeAndPage = {
            idType,
            page: paramPage
        }
        dataProductByType(idTypeAndPage)
        getProductType()
    }


    render() {
        const { dataType, dataProductByType_1 } = this.props;
        let idType = parseInt(this.props.match.params.id);
        let dataParamsUrl = queryString.parse(this.props.location.search)
        let paramPage = dataParamsUrl.page
        let paramsUrl = {
            idType,
            paramPage
        }

        const dataIdType = dataType ? dataType.find(e => e.id == idType) : ''

        let showDataListProduct;
        if (dataProductByType_1 != null) {
            showDataListProduct = dataProductByType_1.map(e => (
                <div className="col-md-3 col-sm-6" key={e.id}>
                    <div className="content-product">
                        <NavLink to={`/product-detail/${e.id}`}>
                            <LazyLoadImage
                                alt="long"
                                effect="blur"
                                height= "300px"
                                src= {`${Api}api-ban-hang/images/product/${e.images[0]}`} // use normal <img> attributes as props
                                width= "100%" />
                            {/* <img src={`${Api}api-ban-hang/images/product/${e.images[0]}`} /> */}
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
                        </div>
                    </div>
                    <PaginationProduct paramsUrl={paramsUrl} />
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
        dataProductByType: (idTypeAndPage) => dispatch({ type: PRODUCT_BY_TYPE_REQUEST, payload: idTypeAndPage }),
        getProductType: () => dispatch({ type: PRODUCT_TYPE_REQUEST })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);