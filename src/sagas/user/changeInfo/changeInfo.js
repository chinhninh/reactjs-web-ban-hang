import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';
import { CHAGNE_INFO_REQUEST } from '../../../redux/actions/user/changeInfo/actionType';
import { changeInfoSuccess, changeInfoError } from '../../../redux/actions/user/changeInfo/actionCreator';
import Api from '../../../api/Api';

export function* changeInfo() {
    yield takeLatest(CHAGNE_INFO_REQUEST, changeInfoSaga)
}

const getChangeInfo = (userInfo) => {
    const linkChangeInfo = `${Api}api-ban-hang/change_info.php`;

    return axios({
        method: "POST",
        url: linkChangeInfo,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        data: {
            token: userInfo.token,
            name: userInfo.name,
            address: userInfo.address,
            phone: userInfo.phone
        }
    })
        .then(response => response.data)
        .catch(error => console.log("error: ", error))
}

function* changeInfoSaga(actionChangeInfo) {
    try {
        const dataChangeInfo = yield call(getChangeInfo, actionChangeInfo.payload);
        let checkData;
        if(dataChangeInfo.name) {checkData = "exist data"}
        else {checkData = ""}
        const data = {
            dataChangeInfo,
            checkData
        }
        yield put(changeInfoSuccess(data))
    } catch (error) {
        yield put(changeInfoError(error))
    }
}

