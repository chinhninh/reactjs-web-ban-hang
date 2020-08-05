import React, { Component } from 'react';
import './Login.scss';
import {connect} from 'react-redux';
import {LOGIN_REQUEST} from '../../redux/actions/user/login/actionType.js';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.history.push('/');
        const {handleLogin} = this.props;
        const {email, password} = this.state;
        const valueInput = {
            email,
            password
        }
        handleLogin(valueInput)
    }

    render() {
        const {email, password} = this.state;
        const {dataLogin} = this.props;
        // console.log("datalogin: ",dataLogin)
        return (
            <div className="Login">
                <div className="row">
                    <div className="col-sm-3 col-1"></div>
                    <div className="col-sm-6 col-10 form-Login">
                        <form  onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input onChange={this.changeInput} name="email" value={email} type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input onChange={this.changeInput} name="password" value={password} type="password" className="form-control" placeholder="Enter password" id="pwd" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
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
        dataLogin: state.login.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (valueInput) => dispatch({ type: LOGIN_REQUEST, payload: valueInput })
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));