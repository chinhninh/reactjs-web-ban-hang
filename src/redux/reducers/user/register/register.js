import { REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS } from '../../../actions/user/register/actionType';

const dataRegister = {
    loading: false,
    data: [],
    error: false
}

const register = (state = dataRegister, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                loading: true,
                data: null,
                error: false
            }
        case REGISTER_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: false
            }
        case REGISTER_ERROR:
            return {
                loading: false,
                data: null,
                error: true
            }
        default:
            return state;
    }
}

export default register;