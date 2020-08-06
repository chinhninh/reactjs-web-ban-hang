import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {LOGIN_REQUEST} from '../../../redux/actions/user/login/actionType.js';
import {loginSuccess, loginError} from '../../../redux/actions/user/login/actionCreator';
import Api from '../../../api/Api';

export function* login () {
    yield takeLatest(LOGIN_REQUEST,loginSaga)
}

const getDataLogin = (valueInput) => {
    const linkLogin = `${Api}api-ban-hang/login.php`;
    
    return axios({
        method: "POST",
        url: linkLogin,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        data: {
            email: valueInput.email,
            password: valueInput.password
          }
    })
    .then(response => response.data)
    .catch(error => console.log("error: ",error))
}

function* loginSaga(actionLogin){
    try {
        const dataLogin = yield call(getDataLogin,actionLogin.payload);
        // console.log("login: ",dataLogin)
        const token = dataLogin.token;
        const user = dataLogin.user;
        const data = {
            dataLogin,
            token,
            user
        }
        yield put(loginSuccess(data))
    } catch (error) {
        yield put(loginError(error))
    }
}

