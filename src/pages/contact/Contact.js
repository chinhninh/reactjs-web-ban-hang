import React, { Component } from 'react';
import './Contact.scss';
import InfoContact from './infoContact/InfoContact';
import GoogleMap from './googleMap/GoogleMap';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <InfoContact />
                    <GoogleMap />
                </div>
            </div>
        );
    }
}

export default Contact;