import React, { Component } from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { SEND_ORDER_REQUEST } from '../../../redux/actions/sendOrder/actionType';
import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAler: true
        };
        this.handleShowAler = this.handleShowAler.bind(this);
        this.clickSendOrder = this.clickSendOrder.bind(this)
    }

    handleShowAler = () => {
        this.setState({showAler: false})
    }

    clickSendOrder = async () => {
        let { handleSendOrder } = this.props;
        let { dataCart, token } = this.props
        let newDataCart = dataCart.map(e => ({ "id": e.id, "quantity": e.quantity }))
        let arrayDataCart = {
            token,
            newDataCart
        }
        handleSendOrder(arrayDataCart)
        this.setState({ showAler: true })
    }
    render() {
        let { dataCart, dataSendOrder } = this.props;
        let {showAler} = this.state

        // show alert
        let AlertSuccess;
        if (showAler) {
            AlertSuccess = <Alert variant="success " onClose={this.handleShowAler} dismissible>
                <Alert.Heading>Checkout Success!</Alert.Heading>
            </Alert>
        } else { AlertSuccess = <div></div> }

        let AlertFalse;
        if (showAler) {
            AlertFalse = <Alert variant="danger " onClose={this.handleShowAler} dismissible>
                <Alert.Heading>false! <span> You need</span> <Link onclick={this.loginAgain} className="btn btn-danger">Login again</Link></Alert.Heading>
            </Alert>
        } else { AlertFalse = <div></div> }

        let alertSendOrder;
        if (dataSendOrder == "THEM_THANH_CONG") { alertSendOrder = AlertSuccess }
        if (dataSendOrder == "TOKEN_KHONG_HOP_LE") { alertSendOrder = AlertFalse }
        if  (dataSendOrder == null ) {alertSendOrder = ""}

        // total price
        let totalPrice = 0;
        if (dataCart.length > 0) {
            for (let i = 0; i < dataCart.length; i++) {
                totalPrice += parseInt(dataCart[i].price) * parseInt(dataCart[i].quantity)
            }
        } else { totalPrice = "" }

        return (
            <div className="checkout">
                <p>
                    Total:
                <span>{totalPrice}$</span>
                </p>
                {alertSendOrder}
                <div className="btn-checkout">
                    <button className="btn" onClick={this.clickSendOrder.bind(this)}>
                        CHECKOUT
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataCart: state.cart.data,
        token: state.login.token,
        dataSendOrder: state.sendOrder.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSendOrder: (arrayDataCart) => dispatch({ type: SEND_ORDER_REQUEST, payload: arrayDataCart })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);