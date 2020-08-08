import {PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_ERROR} from './actionType';

export const productDetailRequest = () => {
    return {
        type: PRODUCT_DETAIL_REQUEST,
    }
}

export const productDetailSuccess = (payload) => {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        payload
    }
}

export const productDetailError = () => {
    return {
        type: PRODUCT_DETAIL_ERROR,
    }
}