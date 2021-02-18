import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import producsData from './products-data';

const reducer = combineReducers({
    producsData,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;