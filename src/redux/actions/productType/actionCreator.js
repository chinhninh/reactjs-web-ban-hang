import {PRODUCT_TYPE_REQUEST, PRODUCT_TYPE_SUCCESS, PRODUCT_TYPE_ERROR} from './actionType';

const productTypeRequest = () => {
    return {
        type: PRODUCT_TYPE_REQUEST
    }
}

const productTypeSuccess = (payload) => {
    return {
        type: PRODUCT_TYPE_SUCCESS,
        payload
    }
}

const productTypeError = () => {
    return {
        type: PRODUCT_TYPE_ERROR
    }
}

export {
    productTypeRequest,
    productTypeSuccess,
    productTypeError
}