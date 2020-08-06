import React, { Component } from 'react';
import './UserActive.scss';
import User from '../user/User';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class UserActive extends Component {
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
                    <NavLink to="/">
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
                {/* <ul className="list-group list-group-horizontal">
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
            </ul> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.login.user
    }
}

export default connect(mapStateToProps)(UserActive);