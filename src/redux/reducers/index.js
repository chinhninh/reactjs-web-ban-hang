import {combineReducers} from 'redux';
import productType from './productType/productType';
import register from './user/register/register';
import login from './user/login/login';
import productDetail from './productDetail/productDetail';
import cart from './cart/cart';
import productByType from './productByType/productByType';

const allReducers = combineReducers ({
    productType,
    register,
    login,
    productDetail,
    cart,
    productByType
})

export default allReducers;
