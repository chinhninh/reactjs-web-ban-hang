import {GET_ID_PRODUCT} from './actionType';

export const getIdProduct = (id) => {
    // console.log("id: ",id)
    return {
        type: GET_ID_PRODUCT,
        id
    }
}