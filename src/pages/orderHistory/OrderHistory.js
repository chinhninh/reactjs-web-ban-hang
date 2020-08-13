import React, { Component } from 'react';
import './OrderHistory.scss';
import { connect } from 'react-redux';
import { ORDER_HISTORY_REQUEST } from '../../redux/actions/orderHistory/actionType';

class OrderHistory extends Component {
    componentDidMount = () => {
        let { getOrderHistory, token } = this.props;
        getOrderHistory(token)
    }

    render() {
        let { dataOrderHistory, loading } = this.props;

        let showOrderHistory;
        if (dataOrderHistory) {
            showOrderHistory = dataOrderHistory.map(e =>
                <tbody>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.date_order}</td>
                                <td>{e.status == 0 ? "success":"pending"}</td>
                                <td>{e.total} $</td>
                            </tr>
                        </tbody>
                )
        } else {showOrderHistory = <div>No data!</div>}

        if(loading) return <div>loading...</div>
        return (
            <div className="order-history">
                <div className="container">
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Order id</th>
                                <th>Order time</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {showOrderHistory}
                    </table>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataOrderHistory: state.orderHistory.data,
        loading: state.orderHistory.loading,
        token: state.login.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrderHistory: (token) => dispatch({ type: ORDER_HISTORY_REQUEST, payload: token })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);