import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {SEND_ORDER_REQUEST} from '../../redux/actions/sendOrder/actionType';
import {sendOrderSuccess, sendOrderError} from '../../redux/actions/sendOrder/actionCreator';
import Api from '../../api/Api';

export function* sendOrder () {
    yield takeLatest(SEND_ORDER_REQUEST,sendOrderSaga)
}

const getDataSendOrder = (payload) => {
    const linkSendOrder = `${Api}api-ban-hang/cart.php`;
    
    return axios({
        method: "POST",
        url: linkSendOrder,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        data: {
                token: payload.token,
                arrayDetail: payload.newDataCart
          }
    })
    .then(response => response.data)
}

function* sendOrderSaga(actionSendOrder){
    try {
        const dataSendOrder = yield call(getDataSendOrder,actionSendOrder.payload);
        yield put(sendOrderSuccess(dataSendOrder))
    } catch (error) {
        yield put(sendOrderError(error))
    }
}

