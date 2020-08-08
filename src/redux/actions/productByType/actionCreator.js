import {PRODUCT_BY_TYPE_REQUEST, PRODUCT_BY_TYPE_SUCCESS, PRODUCT_BY_TYPE_ERROR} from './actionType';

const productByTypeRequest = () => {
    return {
        type: PRODUCT_BY_TYPE_REQUEST
    }
}

const productByTypeSuccess = (payload) => {
    return {
        type: PRODUCT_BY_TYPE_SUCCESS,
        payload
    }
}

const productByTypeError = () => {
    return {
        type: PRODUCT_BY_TYPE_ERROR
    }
}

export {
    productByTypeRequest,
    productByTypeSuccess,
    productByTypeError
}