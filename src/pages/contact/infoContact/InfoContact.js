import React, { Component } from 'react';
import './InfoContact.scss';
import {FaLocationArrow} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

class InfoContact extends Component {
    render() {
        return (
            <div className="info-contact">
                 <div>
                    <i><FaLocationArrow/></i>
                    <span>350 Le Duc Tho, Go Vap, Tp.HCM</span>
                </div>
                <div>
                    <i><FaPhone/></i>
                    <span>(+84) 912345678</span>
                </div>
                <div>
                    <i><FaEnvelope/></i>
                    <span>tokuda@gmail.com</span>
                </div>
            </div>
        );
    }
}

export default InfoContact;