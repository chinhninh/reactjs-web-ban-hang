import React, { Component } from 'react';
import './ImageDetail.scss';
import Slider from "react-slick";
import sp1 from '../../../images/temp/sp1.jpeg';
import sp2 from '../../../images/temp/sp2.jpeg';

class ImageDetail extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="image-product">
                <Slider {...settings}>
                    <div className="image">
                        <img src={sp1}/>
                    </div>
                    <div className="image">
                       <img src={sp2}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ImageDetail;