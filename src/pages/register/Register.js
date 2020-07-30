import React, { Component } from 'react';
import "./Register.scss";

class Register extends Component {
    render() {
        return (
            <div className="register">
                <div className="row">
                    <div className="col-sm-3 col-1"></div>
                    <div className="col-sm-6 col-10 form-register">
                        <form action="/action_page.php">
                            <div className="form-group">
                                <label for="name">Full name:</label>
                                <input type="text" className="form-control" placeholder="Enter your name" id="name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" placeholder="Enter email" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Re-enter your Password:</label>
                                <input type="re-password" className="form-control" placeholder="Re-enter your Password:" id="re-pwd" />
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

export default Register;