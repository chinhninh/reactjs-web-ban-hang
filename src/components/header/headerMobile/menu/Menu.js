import React, { Component } from 'react';
import './Menu.scss';
import { slide as Menu } from 'react-burger-menu';
import ButtonInMeNu from './buttonInMenu/ButtonInMeNu';
import User from './user/User';

class MenuMobile extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {

        return (
            <div className="menu-mobile">
                <Menu>
                    <ButtonInMeNu/>
                    <User/>
                </Menu>
            </div>
        );
    }
}

export default MenuMobile;