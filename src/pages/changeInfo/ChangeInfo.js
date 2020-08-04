import React, { Component } from 'react';
import './ChangeInfo.scss';

class ChangeInfo extends Component {
    render() {
        return (
            <div className="change-info">
                <div className="row">
                    <div className="col-sm-3 col-12"></div>
                    <div className="col-sm-6 col-12 body-change-info">
                        <form action="/action_page.php">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input value="Phan Chinh Ninh" type="text" class="form-control" placeholder="Enter email" id="name" />
                            </div>
                            <div class="form-group">
                                <label for="address">Address:</label>
                                <input value="350 Le Duc Tho, Go Vap, Tp.HCM" type="text" class="form-control" placeholder="" id="address" />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone:</label>
                                <input value="0912345678" type="text" class="form-control" placeholder="" id="phone" />
                            </div>
                            <button type="submit" class="btn btn-primary">Change info</button>
                        </form>
                    </div>
                    <div className="col-sm-3 col-12"></div>
                </div>
            </div>
        );
    }
}

export default ChangeInfo;