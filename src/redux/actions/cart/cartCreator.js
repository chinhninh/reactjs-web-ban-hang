import {ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, DELETE_CART} from './cartType';

export const addToCart = (dataIdProduct) => {
    return {
        type: ADD_TO_CART,
        dataIdProduct
    }
}

export const incQuantity = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        id
    }
}

export const decQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        id
    }
}

export const deleteCart = (id) => {
    return {
        type: DELETE_CART,
        id
    }
}