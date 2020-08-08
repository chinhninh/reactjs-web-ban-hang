import { all, fork } from "redux-saga/effects";
import {productType} from './productType/productType';
import {register} from './user/register/register';
import {login} from './user/login/Login';
import {productByType} from './productByType/productByType';
import {productDetail} from './productDetail/productDetail';

export default function* rootSaga() {
    yield all([
        fork(productType),
        fork(register),
        fork(login),
        fork(productByType),
        fork(productDetail)
    ])
}