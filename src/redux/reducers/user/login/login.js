import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../../../actions/user/login/actionType.js';

const dataRegister = {
    loading: false,
    data: [],
    error: false
}

const login = (state = dataRegister, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                data: null,
                error: false
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: false
            }
        case LOGIN_ERROR:
            return {
                loading: false,
                data: null,
                error: true
            }
        default:
            return state;
    }
}

export default login;