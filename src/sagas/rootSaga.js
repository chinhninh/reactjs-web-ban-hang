import { all, fork } from "redux-saga/effects";
import {productType} from './productType/productType';
import {register} from './user/register/register';

export default function* rootSaga() {
    yield all([
        fork(productType),
        fork(register),
    ])
}