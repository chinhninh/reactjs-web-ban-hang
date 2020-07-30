import React, { Component } from 'react';
import './Category.scss';
import Slider from "react-slick";
import {NavLink} from 'react-router-dom';
import category_1 from '../../../images/temp/maxi.jpg';
import category_2 from '../../../images/temp/midi.jpg';
import category_3 from '../../../images/temp/mini.jpg';
import category_4 from '../../../images/temp/little.jpg';

class Category extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="category">
                <h1>LIST OF CATEGORY</h1>

                {/* slider */}
                <Slider {...settings}>
                    <div>
                        <div className="content-category">
                            <NavLink to="">
                                <img src={category_1}/>
                                <p>Maxi Dress</p>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                    <div className="content-category">
                            <NavLink to="">
                                <img src={category_2}/>
                                <p>Maxi Dress</p>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                    <div className="content-category">
                            <NavLink to="">
                                <img src={category_3}/>
                                <p>Maxi Dress</p>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                    <div className="content-category">
                            <NavLink to="">
                                <img src={category_4}/>
                                <p>Maxi Dress</p>
                            </NavLink>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Category;