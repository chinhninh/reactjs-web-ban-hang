import {ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS, ORDER_HISTORY_ERROR} from '../../actions/orderHistory/actionType';

const dataOrderHistory = {
    loading: false,
    data: null,
    error: false
}

const orderHistory = (state = dataOrderHistory, action) => {
    switch (action.type) {
        case ORDER_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                data:null,
                error: false
            }
        case ORDER_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case ORDER_HISTORY_ERROR:
            return {
                ...state,
                loading: false,
                data:null,
                error: true
            }
        default:
            return state;
    }
}

export default orderHistory;