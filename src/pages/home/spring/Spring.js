import React, { Component } from 'react';
import './Spring.scss';
import {NavLink} from 'react-router-dom';
import banner from '../../../images/temp/banner.jpg';

class Spring extends Component {
    render() {
        return (
            <div className="spring">
                <h1>
                    SPRING COLLECTION
                </h1>
                <div className="banner">
                <a href="#">
                    <img src={banner}/>
                </a>
                </div>
            </div>
        );
    }
}

export default Spring;