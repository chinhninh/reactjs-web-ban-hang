import React, { Component } from 'react';
import './User.scss';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        const { dataUser, dataChangeInfo } = this.props;
        let userName;
        if(dataChangeInfo) {userName = dataChangeInfo.name}
        if (dataChangeInfo == null && dataUser) {userName = dataUser.name}
        if (dataChangeInfo == null && dataUser == null) {userName = ""} 

        return (
            <div>
                <div className="btn-user">
                    <a href="#">
                        <i><FaUser /></i>
                        {/* {userName} */}
                       <span> {userName}</span>
                    </a>
                    <ul className="menu-btn-user">
                        <li className="dropdown-item">
                            <NavLink to="/order-history">Order history</NavLink>
                        </li>
                        <li className="dropdown-item">
                            <NavLink to="/change-info">Change info</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.login.user,
        loadingUser: state.login.loading,
        dataChangeInfo: state.changeInfo.data
    }
}

export default connect(mapStateToProps)(User);