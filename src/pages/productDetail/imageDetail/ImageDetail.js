import React, { Component } from 'react';
import './ImageDetail.scss';
import Slider from "react-slick";
import sp1 from '../../../images/temp/sp1.jpeg';
import sp2 from '../../../images/temp/sp2.jpeg';
import { connect } from 'react-redux';
import Api from '../../../api/Api';

class ImageDetail extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { idProduct, dataProduct } = this.props;
        const imageProductDetail = dataProduct.find(e => e.id == idProduct)

        const imageProductDetail_1 = (imageProductDetail ? imageProductDetail.images : "")

        let imageProductDetail_2;
        if (imageProductDetail_1) {
            imageProductDetail_2 = imageProductDetail_1.map((e,i) =>
                <div className="image" key={i}>
                    <img src={`${Api}api-ban-hang/images/product/${e}`} />
                </div>
            )
        } else {imageProductDetail_2 = ""}

        return (
            <div className="image-product">
                <Slider {...settings}>
                    {imageProductDetail_2}

                    {/* <div className="image">
                        <img src={sp2} />
                    </div> */}
                </Slider>
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

export default connect(mapStateToProps)(ImageDetail);