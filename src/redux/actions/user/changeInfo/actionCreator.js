import {CHAGNE_INFO_REQUEST, CHAGNE_INFO_SUCCESS, CHAGNE_INFO_ERROR} from './actionType';

const changeInfoRequest = () => {
    return {
        type: CHAGNE_INFO_REQUEST
    }
}

const changeInfoSuccess = (data) => {
    return {
        type: CHAGNE_INFO_SUCCESS,
        payload: data
    }
}

const changeInfoError = () => {
    return {
        type: CHAGNE_INFO_ERROR
    }
}

export {
    changeInfoRequest,
    changeInfoSuccess,
    changeInfoError
}