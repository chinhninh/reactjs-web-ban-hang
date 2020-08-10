import React, { Component } from 'react';
import './UserActive.scss';
import User from '../user/User';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {LOGOUT} from '../../../redux/actions/user/login/actionType.js';
import {LOGOUT_CHANGE_INFO} from '../../../redux/actions/user/changeInfo/actionType';

class UserActive extends Component {
    clickLogout = () => {
        const {handleLogoutChangeInfo, handleLogut} = this.props;
        handleLogut();
        handleLogoutChangeInfo();
    }

    render() {
        const { dataUser } = this.props;
        console.log ("teasd:",dataUser)

        const btnLoginRegister = (
            <ul className="list-group list-group-horizontal">
                <li>
                    <User />
                </li>
                <li>
                    <NavLink to="/login">
                        Login
                </NavLink>
                </li>
                <li>
                    <NavLink to="/register">
                        Register
                </NavLink>
                </li>
            </ul>
        )

        const btnLogout = (
            <ul className="list-group list-group-horizontal">
                <li>
                    <User />
                </li>
                <li>
                    <NavLink to="/" onClick = {this.clickLogout}>
                        Logout
                </NavLink>
                </li>
            </ul>
        )

        let showBtn;
        if(dataUser == null) {showBtn = btnLoginRegister}
        else {showBtn = btnLogout}

        return (
            <div className="user-active">
                {showBtn}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.login.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogut: () => dispatch({type: LOGOUT}),
        handleLogoutChangeInfo: () => dispatch({type:LOGOUT_CHANGE_INFO})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserActive);