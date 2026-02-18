// npm i redux @types/redux
import { combineReducers, createStore } from 'redux';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';

const reducer = combineReducers({
    amout: amountReducer,
    goods: goodsReducer
});
const store = createStore(reducer);

export default store;
