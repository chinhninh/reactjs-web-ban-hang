import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from './actionType.js';

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const loginSuccess = (dataLogin) => {
    return {
        type: LOGIN_SUCCESS,
        payload: dataLogin
    }
}

const loginError = () => {
    return {
        type: LOGIN_ERROR
    }
}

export {
    loginRequest,
    loginSuccess,
    loginError
}