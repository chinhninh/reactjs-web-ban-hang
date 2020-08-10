import { CHAGNE_INFO_REQUEST, CHAGNE_INFO_SUCCESS, CHAGNE_INFO_ERROR, LOGOUT_CHANGE_INFO } from '../../../actions/user/changeInfo/actionType';

const dataRegister = {
    loading: false,
    data: null,
    error: false,
    checkData:""
}

const changeInfo = (state = dataRegister, action) => {
    switch (action.type) {
        case CHAGNE_INFO_REQUEST:
            return {
                loading: true,
                data: null,
                error: false,
                checkData:""
            }
        case CHAGNE_INFO_SUCCESS:
            return {
                loading: false,
                data: action.payload.dataChangeInfo,
                error: false,
                checkData:action.payload.checkData
            }
        case CHAGNE_INFO_ERROR:
            return {
                loading: false,
                data: null,
                error: true,
                checkData:""
            }
        case LOGOUT_CHANGE_INFO:
            return {
                loading: false,
                data: null,
                error: false,
                checkData:""
            }
        default:
            return state;
    }
}

export default changeInfo;