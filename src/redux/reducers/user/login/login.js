import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../../../actions/user/login/actionType.js';

const dataRegister = {
    loading: false,
    token: "",
    user:[],
    data:[],
    error: false
}

const login = (state = dataRegister, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                token: "",
                user: null,
                data:null,
                error: false
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
                data: action.payload.dataLogin,
                error: false
            }
        case LOGIN_ERROR:
            return {
                loading: false,
                token: "",
                user: null,
                data:null,
                error: true
            }
        default:
            return state;
    }
}

export default login;