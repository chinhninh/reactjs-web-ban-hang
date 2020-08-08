import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {PRODUCT_DETAIL_REQUEST} from '../../redux/actions/productDetail/actionType';
import {productDetailSuccess, productDetailError} from '../../redux/actions/productDetail/actionCreator';
import Api from '../../api/Api';

export function* productDetail () {
    yield takeLatest(PRODUCT_DETAIL_REQUEST,productDetailSaga)
}

const getProductDetail = (idProduct) => {
    const linkProductDetail = `${Api}api-ban-hang/product_detail.php?id=${idProduct}`;
    
    return axios.get(linkProductDetail)
    .then(response => response.data)
    .catch(error => console.log("error: ",error))
}

function* productDetailSaga(actionProductDetail){
    try {
        const dataProductDetail = yield call(getProductDetail,actionProductDetail.payload);
        yield put(productDetailSuccess(dataProductDetail))
    } catch (error) {
        yield put(productDetailError(error))
    }
}

