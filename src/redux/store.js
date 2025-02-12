import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import DataReducer from './reducers/dataReducer';


const rootReducer = combineReducers({
  data: DataReducer,

});

const middleware = [thunk];


const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
