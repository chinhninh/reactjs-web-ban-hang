import React, { Component } from 'react';
import "./Register.scss";
import { connect } from 'react-redux';
import { REGISTER_REQUEST } from '../../redux/actions/user/register/actionType';
import { Link, withRouter } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            showAler: true,
            confirmPassword: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShowAler = this.handleShowAler.bind(this);
    }

    handleShowAler = () => {
        this.setState({
            showAler: false
        })
    }

    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // this.props.history.push('/login');
        const { handleRegister } = this.props;
        const { name, email, password, rePassword, confirmPassword } = this.state;
        const valueInput = {
            name,
            email,
            password
        }
        if(password != rePassword){
            this.setState({confirmPassword: "Password don't match"})
        } else {
            handleRegister(valueInput);
            this.setState({showAler:true})
        }
    }

    render() {
        const { name, email, password, rePassword, showAler, confirmPassword } = this.state;
        const { dataRegister, loadingRegister } = this.props;
        console.log("data: ",dataRegister)
        console.log("alert: ",showAler)

        const titleBtnRegister = (
            loadingRegister ? "loading..." : "Register"
        )

        let AlertSuccess;
            if (showAler) {
                AlertSuccess = <Alert variant="success " onClose={this.handleShowAler} dismissible>
                    <Alert.Heading>Success! <span> You want</span> <Link to="/login" className="btn btn-success">Login now</Link></Alert.Heading>
                </Alert>
            } else { AlertSuccess = <div></div> }

        const alertRegister = (
            dataRegister == "THANH_CONG" ? AlertSuccess:""
        )

        return (
            <div className="register" >
                <div className="row">
                    <div className="col-sm-3 col-1"></div>
                    <div className="col-sm-6 col-10 form-register">
                        <form onSubmit={this.handleSubmit}>
                            {/* name */}
                            <div className="form-group">
                                <label for="name">Full name:</label>
                                <input required name="name" value={name} onChange={this.changeInput} type="text" className="form-control" placeholder="Enter your name" id="name" />
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input required name="email" value={email} onChange={this.changeInput} type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input required name="password" value={password} onChange={this.changeInput} type="password" className="form-control" placeholder="Enter password" id="pwd" />
                            </div>
                            {/* rePassword */}
                            <div className="form-group">
                                <label for="repwd">Re-enter your Password:</label>
                                <input required name="rePassword" value={rePassword} onChange={this.changeInput} type="password" className="form-control" placeholder="Re-enter your Password:" id="re-pwd" />
                                {password === rePassword  ? "": <p className="confirmPassword">{confirmPassword}</p>}
                            </div>
                            {alertRegister}
                            <button type="submit" className="btn btn-primary">{titleBtnRegister}</button>
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
        dataRegister: state.register.data,
        loadingRegister: state.register.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRegister: (valueInput) => dispatch({ type: REGISTER_REQUEST, payload: valueInput })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));