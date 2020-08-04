import {REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS} from "./actionType";

const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
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