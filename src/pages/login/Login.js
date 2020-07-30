import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="row">
                    <div className="col-sm-3 col-1"></div>
                    <div className="col-sm-6 col-10 form-Login">
                        <form action="/action_page.php">
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
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

export default Login;