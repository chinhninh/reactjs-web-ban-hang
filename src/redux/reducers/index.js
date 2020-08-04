import {combineReducers} from 'redux';
import productType from './productType/productType';
import register from './user/register/register';

const allReducers = combineReducers ({
    productType,
    register
})

export default allReducers;
