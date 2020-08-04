import React, { Component } from 'react';
import './OrderHistory.scss';

class OrderHistory extends Component {
    render() {
        return (
            <div className="order-history">
                <div className="container">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Order id</th>
                                <th>Order time</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ORD15</td>
                                <td>2017-04-19 08:30:33</td>
                                <td>Pending</td>
                                <td>312$</td>
                            </tr>
                            <tr>
                                <td>ORD16</td>
                                <td>2017-04-19 08:30:33</td>
                                <td>Pending</td>
                                <td>312$</td>
                            </tr>
                            <tr>
                                <td>ORD17</td>
                                <td>2017-04-19 08:30:33</td>
                                <td>Pending</td>
                                <td>312$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OrderHistory;