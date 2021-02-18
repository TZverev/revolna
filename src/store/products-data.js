import firebase, { db } from '../firebase/firebase-info';
import { createStore } from 'redux';

const defaultState = {
    lastDoc: null,
    isLoading: false,
    data: [],
}

function productsData(state = defaultState, action) {
    if (action.type === 'FETCH_PRODUCTS_START') {
        return {
            ...state,
            isLoading: true,
        }
    }

    if (action.type === 'FETCH_PRODUCTS_SUCCESS') {
        return {
            lastDoc: action.lastDoc,
            data: [...state.data, ...action.data],
            isLoading: false,
        }
    }
    return state

}


export default productsData;