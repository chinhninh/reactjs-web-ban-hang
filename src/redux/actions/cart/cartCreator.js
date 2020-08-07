import {ADD_TO_CART} from './cartType';

export const addToCart = (dataIdProduct) => {
    return {
        type: ADD_TO_CART,
        dataIdProduct
    }
}