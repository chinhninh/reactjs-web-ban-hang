import React, { Component } from 'react';
import sp1 from '../../../../images/temp/sp1.jpeg';
import './ImageProductCart.scss';

class ImageProductCart extends Component {
    render() {
        return (
            <div className="image-product-cart">
                <img src={sp1}/>
            </div>
        );
    }
}

export default ImageProductCart;