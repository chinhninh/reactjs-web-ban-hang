import { takeLatest, call, put,takeEvery } from "redux-saga/effects";
import axios from 'axios';
import {REGISTER_REQUEST} from '../../../redux/actions/user/register/actionType';
import {registerSuccess, registerError} from '../../../redux/actions/user/register/actionCreator';
import Api from '../../../api/Api';

export function* register () {
    yield takeEvery(REGISTER_REQUEST,registerSaga)
}

const getDataRegister = (valueInput) => {
    const linkRegister = `${Api}api-ban-hang/register.php`;
    
    return axios({
        method: "POST",
        url: linkRegister,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        data: {
            email: valueInput.email,
            name: valueInput.name,
            password: valueInput.password
          }
    })
    .then(response => response.data)
    .catch(error => console.log("error: ",error))
}

function* registerSaga(actionRegister){
    try {
        const dataRegister = yield call(getDataRegister,actionRegister.payload);
        // console.log("register: ",dataRegister)
        yield put(registerSuccess(dataRegister))
    } catch (error) {
        yield put(registerError(error))
    }
}

