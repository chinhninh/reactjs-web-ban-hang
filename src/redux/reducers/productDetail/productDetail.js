import {GET_ID_PRODUCT} from '../../actions/productDetail/actionType';

const idProduct = {
    id:""
}

const productDetail = (state = idProduct, action) => {
    switch (action.type) {
        case GET_ID_PRODUCT:
            return {
                ...state,
                id: action.id
            }
        default:
            return state;
    }
}

export default productDetail;