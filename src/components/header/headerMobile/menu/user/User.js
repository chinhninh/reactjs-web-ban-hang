import React, { Component } from 'react';
import './User.scss';
import { FaUser } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa'
import {NavLink} from 'react-router-dom';

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleShow: false
        }
    }

    handleShowBtn (){
        this.setState({isToggleShow: !this.state.isToggleShow})
    }

    render() {
        const {isToggleShow} = this.state;
        // console.log(isToggleShow)
        return (
            <div>
                <button className="btn btn-user-mobile" onClick={this.handleShowBtn.bind(this)}>
                    <strong><FaUser /></strong>
                    <span>Phan Chinh Ninh</span>
                    <i className={isToggleShow? "hover-angle-down":""}><FaAngleDown /></i>
                </button>
                <div className={`btn-in-user ${isToggleShow? "show-btn-user":""}`}>
                    <ul>
                        <li>
                            <NavLink to="">
                                Change info
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                Order history
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default User;