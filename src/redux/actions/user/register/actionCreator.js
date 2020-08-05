import {REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS} from "./actionType";

const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const registerSuccess = (dataRegister) => {
    return {
        type: REGISTER_SUCCESS,
        payload:dataRegister
    }
}

const registerError = () => {
    return {
        type: REGISTER_ERROR
    }
}

export {
    registerRequest,
    registerSuccess,
    registerError
}