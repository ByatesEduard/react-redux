// npm i redux @types/redux
import { combineReducers, createStore } from 'redux';
import amountReducer from '../features/amount';

const reducer = combineReducers({
    amout: amountReducer
});
const store = createStore(reducer);

export default store;
