import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import {PRODUCT_BY_TYPE_REQUEST} from '../../redux/actions/productByType/actionType';
import {productByTypeSuccess, productByTypeError} from '../../redux/actions/productByType/actionCreator';
import Api from '../../api/Api';

export function* productByType () {
    yield takeLatest(PRODUCT_BY_TYPE_REQUEST,productByTypeSaga)
}

const getProductByType = (idTypeAndPage) => {
    const linkProductByType = `${Api}api-ban-hang/product_by_type.php?id_type=${idTypeAndPage.idType}&page=${idTypeAndPage.page}`;
    
    return axios.get(linkProductByType)
    .then(response => response.data)
    .catch(error => console.log("error: ",error))
}

function* productByTypeSaga(actionProductByType){
    try {
        const dataProductType = yield call(getProductByType,actionProductByType.payload);
        yield put(productByTypeSuccess(dataProductType))
    } catch (error) {
        yield put(productByTypeError(error))
    }
}

