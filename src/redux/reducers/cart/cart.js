import {ADD_TO_CART} from '../../actions/cart/cartType';

const dataCart = {
    data: []
}

const cart = (state = dataCart, action ) => {
    if (action.type == ADD_TO_CART) return {
        data: state.data.concat(action.dataIdProduct)
    }
    return state;
}

export default cart;