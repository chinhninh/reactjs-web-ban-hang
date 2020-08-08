import {PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_ERROR} from '../../actions/productDetail/actionType';

const dataProductDetail = {
    loading: false,
    data: null,
    error: false
}

const productDetail = (state = dataProductDetail, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
                data:null,
                error: false
            }
        case PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case PRODUCT_DETAIL_ERROR:
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