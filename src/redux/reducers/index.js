import {combineReducers} from 'redux';
import productType from './productType/productType';
import register from './user/register/register';
import login from './user/login/login';

const allReducers = combineReducers ({
    productType,
    register,
    login
})

export default allReducers;
