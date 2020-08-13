import {combineReducers} from 'redux';
import productType from './productType/productType';
import register from './user/register/register';
import login from './user/login/login';
import productDetail from './productDetail/productDetail';
import cart from './cart/cart';
import productByType from './productByType/productByType';
import changeInfo from './user/changeInfo/changeInfo';
import sendOrder from './sendOrder/sendOrder';

const allReducers = combineReducers ({
    productType,
    register,
    login,
    productDetail,
    cart,
    productByType,
    changeInfo,
    sendOrder
})

export default allReducers;
