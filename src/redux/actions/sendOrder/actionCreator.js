import { SEND_ORDER_SUCCESS,SEND_ORDER_ERROR } from './actionType';

const sendOrderSuccess = (payload) => {
    return {
        type: SEND_ORDER_SUCCESS,
        payload
    }
}

const sendOrderError = (error) => {
    return {
        type: SEND_ORDER_ERROR,
        payload: error
    }
}

export {
    sendOrderSuccess,
    sendOrderError
}