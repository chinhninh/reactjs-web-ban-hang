import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { connect } from 'react-redux';
import { PRODUCT_BY_TYPE_REQUEST } from '../../redux/actions/productByType/actionType';
import {Redirect} from 'react-router-dom';

class PaginationProduct extends Component {
    constructor(props) {
        super(props);
        let {paramsUrl} = this.props;
        let page = parseInt(paramsUrl.paramPage)
        this.state = {
            activePage: page
        };
    }

    async handlePageChange(pageNumber) {
        await this.setState({ activePage: pageNumber });
        let { dataProductByType, paramsUrl } = this.props;
        let idType = paramsUrl.idType;
        let {activePage} = this.state;
        console.log(activePage)
        // window.location.replace(`/list-product/${idType}?page=${activePage}`)
        history.pushState({}, null, `/list-product/${idType}?page=${activePage}`)
        let idTypeAndPage = {
            idType,
            page: activePage
        }
        dataProductByType(idTypeAndPage)
    }

    render() {
        let {paramsUrl} = this.props;
        let paramPage = parseInt(paramsUrl.paramPage)
        return (
            <div style={{marginTop: "20px"}}>
                <Pagination
                    activePage={this.state.activePage}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(PaginationProduct);