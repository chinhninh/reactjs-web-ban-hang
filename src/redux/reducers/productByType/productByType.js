import { PRODUCT_BY_TYPE_REQUEST, PRODUCT_BY_TYPE_SUCCESS, PRODUCT_BY_TYPE_ERROR } from '../../actions/productByType/actionType';

const dataProductByType = {
    loading: false,
    data: null,
    error: false
}

const productByType = (state = dataProductByType, action) => {
    switch (action.type) {
        case PRODUCT_BY_TYPE_REQUEST:
            return {
                ...state,
                loading: true,
                data:null,
                error: false
            }
        case PRODUCT_BY_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case PRODUCT_BY_TYPE_ERROR:
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

export default productByType;
