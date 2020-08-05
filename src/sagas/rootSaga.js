import { all, fork } from "redux-saga/effects";
import {productType} from './productType/productType';
import {register} from './user/register/register';
import {login} from './user/login/Login';

export default function* rootSaga() {
    yield all([
        fork(productType),
        fork(register),
        fork(login),
    ])
}