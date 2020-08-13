import {SEND_ORDER_REQUEST, SEND_ORDER_SUCCESS, SEND_ORDER_ERROR} from '../../actions/sendOrder/actionType';

const dataProductDetail = {
    loading: false,
    data: null,
    error: false
}

const productDetail = (state = dataProductDetail, action) => {
    switch (action.type) {
        case SEND_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                data:null,
                error: false
            }
        case SEND_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case SEND_ORDER_ERROR:
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

export default productDetail;