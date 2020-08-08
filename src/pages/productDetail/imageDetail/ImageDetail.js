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

        const {  dataProductDetail } = this.props;

        let arrImages = [];
        
        if(dataProductDetail){ dataProductDetail.map(e => (
            arrImages= e.images
        ))}

        let imageProductDetail;
        if (arrImages.length > 0) {
            imageProductDetail = arrImages.map((e,i) =>(
                <div className="image" key={i}>
                    <img src={`${Api}api-ban-hang/images/product/${e}`} />
                </div>
            ))
        } else {imageProductDetail = ""}

        return (
            <div className="image-product">
                <Slider {...settings}>
                    {imageProductDetail}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataProductDetail: state.productDetail.data
    }
}

export default connect(mapStateToProps)(ImageDetail);