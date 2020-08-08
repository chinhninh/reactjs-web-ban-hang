import React, { Component } from 'react';
import './Category.scss';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PRODUCT_TYPE_REQUEST } from '../../../redux/actions/productType/actionType';
import Api from '../../../api/Api';

class Category extends Component {
    componentDidMount() {
        const { getProductType, loadingProductType } = this.props;
        // console.log(loadingProductType)
        getProductType()
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { dataType, loadingProductType, dataLogin } = this.props;

        var dataCategory;

        if (dataType == [] || dataType == null) { dataCategory = <div>loading...</div> }
        else {
            dataCategory = dataType.map((item) => (
                <div key={item.id}>
                    <div className="content-category">
                        <NavLink to={`/list-product/${item.id}`} key={item.id}>
                            <img src={`${Api}api-ban-hang/images/type/${item.image}`} />
                            <p>{item.name}</p>
                        </NavLink>
                    </div>
                </div>
            ))
        }

        return (
            <div className="category">
                <h1>LIST OF CATEGORY</h1>

                {/* slider */}
                <Slider {...settings}>
                    {dataCategory}
                    {/* <div>
                        <div className="content-category">
                            <NavLink to="/list-product">
                                <img src={category_4} />
                                <p>Maxi Dress</p>
                            </NavLink>
                        </div>
                    </div> */}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataType: state.productType.dataType,
        loadingProductType: state.productType.loading,
        dataLogin: state.login.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductType: () => dispatch({ type: PRODUCT_TYPE_REQUEST })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);