import { PRODUCT_TYPE_REQUEST, PRODUCT_TYPE_SUCCESS, PRODUCT_TYPE_ERROR } from '../../actions/productType/actionType';

const dataProductType = {
    loading: false,
    dataProduct: [],
    dataType: [],
    error: false
}

const productType = (state = dataProductType, action) => {
    switch (action.type) {
        case PRODUCT_TYPE_REQUEST:
            return {
                ...state,
                loading: true,
                dataProduct: null,
                dataType: null,
                error: false
            }
        case PRODUCT_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                dataProduct: action.payload.dataProduct,
                dataType: action.payload.dataType,
                error: false
            }
        case PRODUCT_TYPE_ERROR:
            return {
                ...state,
                loading: false,
                dataProduct: null,
                dataType: null,
                error: true
            }
        default:
            return state;
    }
}

export default productType;