
import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import {composeWithDevTools} from 'redux-devtools-extension';// <== to implement more easly the config in reduxtools 
import thunk from 'redux-thunk';// <==  create async actions, accept dispatch, and setState as an arguments

import weatherReducer from './store/reducers/weatherReducers';
import alertReducer from './store/reducers/alertReducers';

// The store:

const rootReducer = combineReducers ({
    weather:weatherReducer,
    alert:alertReducer
});

const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store