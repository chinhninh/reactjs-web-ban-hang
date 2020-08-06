import React, { Component } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { LOGIN_REQUEST } from '../../redux/actions/user/login/actionType.js';
import { withRouter,Redirect } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showAlerError: true,
        };
        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowAler = this.handleShowAler.bind(this);
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            showAlerError: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.history.push('/');
        const { handleLogin,dataLogin } = this.props;
        const { email, password } = this.state;
        const valueInput = {
            email,
            password
        }
        handleLogin(valueInput);
        this.setState({showAlerError: true})
        
        // this.setState({showAler:true})
    }

    handleShowAler = () => {
        this.setState({showAlerError:false})
    }

    render() {
        const { email, password,showAlerError } = this.state;
        const { dataLogin, loadingLogin, tokenUser } = this.props;
        
        const titleBtnLogin = (
            loadingLogin? "loading...":"Login"
        )

        let alertError;
        if (showAlerError) {
            alertError = <Alert variant="danger" onClose={this.handleShowAler} dismissible>
                <Alert.Heading> Invalid Email or password.</Alert.Heading>
            </Alert>
        } else { alertError = <div></div> }

        const AlertLoginError = (dataLogin == "SAI_THONG_TIN_DANG_NHAP" ? alertError: "")

        if (tokenUser) {
            return <Redirect to='/' />
        }
        return (
            <div className="Login">
                <div className="row">
                    <div className="col-sm-3 col-1"></div>
                    <div className="col-sm-6 col-10 form-Login">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input required onChange={this.changeInput} name="email" value={email} type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input required onChange={this.changeInput} name="password" value={password} type="password" className="form-control" placeholder="Enter password" id="pwd" />
                            </div>
                            {AlertLoginError}
                            <button type="submit" className="btn btn-primary">{titleBtnLogin}</button>
                        </form>
                    </div>
                    <div className="col-sm-3 col-1"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tokenUser: state.login.token,
        user: state.login.user,
        loadingLogin: state.login.loading,
        dataLogin: state.login.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (valueInput) => dispatch({ type: LOGIN_REQUEST, payload: valueInput })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));