import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {PRODUCT_TYPE_REQUEST} from '../../redux/actions/productType/actionType';
import {productTypeSuccess, productTypeError} from '../../redux/actions/productType/actionCreator';
import Api from '../../api/Api';

export function* productType () {
    yield takeLatest(PRODUCT_TYPE_REQUEST,productTypeSaga)
}

const getProductType = () => {
    const linkProductType = `${Api}api-ban-hang/`;
    
    return axios({
        method: "GET",
        url: linkProductType
    })
    .then(response => response.data)
    .catch(error => console.log("error: ",error))
}

function* productTypeSaga(){
    try {
        const dataProductType = yield call(getProductType);
        const dataProduct = dataProductType.product
        const dataType = dataProductType.type
        const payload = {
            dataProduct,
            dataType
        }
        yield put(productTypeSuccess(payload))
    } catch (error) {
        yield put(productTypeError(error))
    }
}

