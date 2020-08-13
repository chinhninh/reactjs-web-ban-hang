import { ORDER_HISTORY_SUCCESS, ORDER_HISTORY_ERROR } from './actionType';

const orderHistorySuccess = (payload) => {
    return {
        type: ORDER_HISTORY_SUCCESS,
        payload
    }
}

const orderHistoryError = (error) => {
    return {
        type: ORDER_HISTORY_ERROR,
        payload: error
    }
}

export {
    orderHistorySuccess,
    orderHistoryError
}