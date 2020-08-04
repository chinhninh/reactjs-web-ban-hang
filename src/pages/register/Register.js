import React, { Component } from 'react';
import "./Register.scss";
import { connect } from 'react-redux';
import { REGISTER_REQUEST } from '../../redux/actions/user/register/actionType';
import { Link ,withRouter} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            rePassword: ""
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
        this.props.history.push('/login');
        const {handleRegister} = this.props;
        const {name, email, password} = this.state;
        const valueInput = {
            name, 
            email, 
            password
        }
        handleRegister(valueInput);
    }

    render() {
        const {name, email, password,rePassword} = this.state;

        return (
            <div className="register">
                <div className="row">
                    <div className="col-sm-3 col-1"></div>
                    <div className="col-sm-6 col-10 form-register">
                        <form to="/login" onSubmit={this.handleSubmit}>
                        {/* name */}
                            <div className="form-group">
                                <label for="name">Full name:</label>
                                <input name="name" value={name} onChange= {this.changeInput} type="text" className="form-control" placeholder="Enter your name" id="name" />
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input name="email" value={email} onChange= {this.changeInput} type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input name="password" value={password} onChange= {this.changeInput} type="password" className="form-control" placeholder="Enter password" id="pwd" />
                            </div>
                            {/* rePassword */}
                            <div className="form-group">
                                <label for="pwd">Re-enter your Password:</label>
                                <input name="rePassword" value={rePassword} onChange= {this.changeInput} type="re-password" className="form-control" placeholder="Re-enter your Password:" id="re-pwd" />
                            </div>
                            <Link to="/login" onClick={this.handleSubmit}  className="btn btn-primary">Submit</Link>
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
        // loadingProductType: state.productType.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRegister: (valueInput) => dispatch({ type: REGISTER_REQUEST, payload: valueInput })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));