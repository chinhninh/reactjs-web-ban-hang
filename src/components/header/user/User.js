import React, { Component } from 'react';
import './User.scss';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        const { dataUser, loadingUser } = this.props;

        return (
            <div>
                <div className="btn-user">
                    <a href="#">
                        <i><FaUser /></i>
                        {/* {userName} */}
                       <span> {dataUser? dataUser.name:""}</span>
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
        loadingUser: state.login.loading
    }
}

export default connect(mapStateToProps)(User);