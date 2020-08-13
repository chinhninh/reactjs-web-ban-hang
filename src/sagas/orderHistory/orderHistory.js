import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {ORDER_HISTORY_REQUEST} from '../../redux/actions/orderHistory/actionType';
import {orderHistorySuccess, orderHistoryError} from '../../redux/actions/orderHistory/actionCreator';
import Api from '../../api/Api';

export function* orderHistory () {
    yield takeLatest(ORDER_HISTORY_REQUEST,orderHistorySaga)
}

const getDataOrderHistory = (payload) => {
    const linkOrderHistory = `${Api}api-ban-hang/order_history.php`;
    
    return axios({
        method: "POST",
        url: linkOrderHistory,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        data: {
                token: payload
          }
    })
    .then(response => response.data)
}

function* orderHistorySaga(actionOrderHistory){
    try {
        const dataOrderHistory = yield call(getDataOrderHistory,actionOrderHistory.payload);
        yield put(orderHistorySuccess(dataOrderHistory))
    } catch (error) {
        yield put(orderHistoryError(error))
    }
}

