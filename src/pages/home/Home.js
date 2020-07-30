import React, { Component } from 'react';
import './Home.scss';
import Spring from './spring/Spring';
import Category from './category/Category';
import Product from './product/Product';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Spring/>
                    <Category/>
                    <Product/>
                </div>
            </div>
        );
    }
}

export default Home;