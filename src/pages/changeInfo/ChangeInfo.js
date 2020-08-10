import React, { Component } from 'react';
import './ChangeInfo.scss';
import { connect } from 'react-redux';
import { CHAGNE_INFO_REQUEST } from '../../redux/actions/user/changeInfo/actionType';
import {LOGOUT} from '../../redux/actions/user/login/actionType.js';
import {LOGOUT_CHANGE_INFO} from '../../redux/actions/user/changeInfo/actionType';
import { Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const { user, dataChangeInfo } = this.props;
        let dataUser;
        if (dataChangeInfo) { dataUser = dataChangeInfo }
        if (dataChangeInfo == null && user) { dataUser = user }
        if (dataChangeInfo == null && user == null) { dataUser = "" }

        this.state = {
            name: dataUser.name,
            address: dataUser.address,
            phone: dataUser.phone,
            showAler: true
        };

        this.handleChangeInfo = this.handleChangeInfo.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.handleShowAler = this.handleShowAler.bind(this);
        this.loginAgain = this.loginAgain.bind(this)
    }

    handleShowAler = () => {
        this.setState({
            showAler: false
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleChangeInfo = (e) => {
        e.preventDefault();
        const { changeInfo, token, dataChangeInfo } = this.props;
        const { name, address, phone } = this.state;
        const userInfo = {
            token,
            name,
            address,
            phone
        }
        changeInfo(userInfo);
        this.setState({
            showAler: true
        })
    }

    loginAgain = () => {
        const {handleLogoutChangeInfo, handleLogut} = this.props;
        handleLogut();
        handleLogoutChangeInfo();
    }

    render() {
        const { name, address, phone, showAler } = this.state;
        const { dataChangeInfo, loadingChangeInfo, checkData } = this.props;
        console.log(dataChangeInfo)

        const titleBtnRegister = (
            loadingChangeInfo ? "loading..." : "Change Info"
        )

        let AlertSuccess;
        if (showAler) {
            AlertSuccess = <Alert variant="success " onClose={this.handleShowAler} dismissible>
                <Alert.Heading>Change Info Success!</Alert.Heading>
            </Alert>
        } else { AlertSuccess = <div></div> }

        let AlertFlase;
        if (showAler) {
            AlertFlase = <Alert variant="danger " onClose={this.handleShowAler} dismissible>
                <Alert.Heading>false! <span> You need</span> <Link onclick={this.loginAgain} className="btn btn-danger">Login again</Link></Alert.Heading>
            </Alert>
        } else { AlertFlase = <div></div> }

        const alertChangeInfoFalse = (
            dataChangeInfo ==  "Loi" ? AlertFlase : ""
        )

        const alertChangeInfoSuccess = (
            checkData == "exist data" ? AlertSuccess : ""
        )

        return (
            <div className="change-info" >
                <div className="row">
                    <div className="col-sm-3 col-12"></div>
                    <div className="col-sm-6 col-12 body-change-info">
                        <form onSubmit={this.handleChangeInfo}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input onChange={this.changeInput} name="name" value={name} type="text" className="form-control" placeholder="Full name" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input onChange={this.changeInput} value={address} type="text" className="form-control" placeholder="" id="address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input onChange={this.changeInput} value={phone} type="text" className="form-control" placeholder="" id="phone" />
                            </div>
                            {alertChangeInfoFalse}
                            {alertChangeInfoSuccess}
                            <button type="submit" className="btn btn-primary">{titleBtnRegister}</button>
                        </form>
                    </div>
                    <div className="col-sm-3 col-12"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        token: state.login.token,
        dataChangeInfo: state.changeInfo.data,
        loadingChangeInfo: state.changeInfo.loading,
        checkData: state.changeInfo.checkData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInfo: (userInfo) => dispatch({ type: CHAGNE_INFO_REQUEST, payload: userInfo }),
        handleLogut: () => dispatch({type: LOGOUT}),
        handleLogoutChangeInfo: () => dispatch({type:LOGOUT_CHANGE_INFO})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);