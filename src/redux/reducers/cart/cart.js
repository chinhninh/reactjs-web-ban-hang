import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, DELETE_CART } from '../../actions/cart/cartType';

const dataCart = {
    data: []
}

const cart = (state = dataCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                data: state.data.concat(action.dataIdProduct)
            }
        case DECREMENT_QUANTITY:
            return {
                data: state.data.map(e => {
                    if (e.id !== action.id) return e
                    return { ...e, quantity: e.quantity - 1 }
                })
            }
        case INCREMENT_QUANTITY:
            return {
                data: state.data.map(e => {
                    if (e.id !== action.id) return e
                    return { ...e, quantity: e.quantity + 1 }
                })
            }
            case DELETE_CART:
            return {
                data: state.data.filter(e => {
                    if(e.id != action.id) return e;
                })
            }

        default:
            return state;
    }
}

export default cart;