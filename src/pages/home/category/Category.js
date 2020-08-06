import React, { Component } from 'react';
import './Category.scss';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import category_1 from '../../../images/temp/maxi.jpg';
import category_2 from '../../../images/temp/midi.jpg';
import category_3 from '../../../images/temp/mini.jpg';
import category_4 from '../../../images/temp/little.jpg';
import { connect } from 'react-redux';
import { PRODUCT_TYPE_REQUEST } from '../../../redux/actions/productType/actionType';

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
        const { dataType, loadingProductType,dataLogin } = this.props;
        var  dataCategory;

        // if(loadingProductType) { dataCategory = <div>loading...</div>}
        // else {  dataCategory = dataType.map((item)=>{
        //                 <NavLink to="/list-product" id={item.id}>
        //                 <div>
        //                     <img src={`http://localhost/api-ban-hang/images/type/${item.image}`} />
        //                     <p>{item.name}</p>
        //                 </div>
                            
        //                 </NavLink>
        // })
        // }

        // console.log('--------------')
    //    console.log(dataCategory)
    // console.log(dataType)


        if (dataType==[] || dataType==null) return <div>loading...</div>
        // console.log(dataType)
        return (
            <div className="category">
                <h1>LIST OF CATEGORY</h1>

                {/* slider */}
                <Slider {...settings}>
                    <div>
                        <div className="content-category">
                        {
                             dataType.map((item)=>{

                        <NavLink to="/list-product" id={item.id}>
                        <div>
                            <img src={`http://localhost/api-ban-hang/images/type/${item.image}`} />
                            <p>{item.name}</p>
                        </div>
                            
                        </NavLink>
                })
                        }
                        </div>
                    </div>

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