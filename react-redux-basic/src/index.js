import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger'


const mathReducer = (state = { result: 1, lastValues: [] }, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case 'SUB':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

const userReducer = (state = { name: 'Wefine', age: 18 }, action) => {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            };
            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

const myLogger = createLogger({
    predicate: (getState, action) => {
        let skipped = true;
        if (action.type === 'ADD') {
            console.log('Logged Action: ', action);
            skipped = false;
        }

        return skipped;
    }
});

const store = createStore(
    combineReducers({ mathReducer, userReducer }),
    applyMiddleware(myLogger)
);

store.subscribe(() => {
    console.log('updated state: ' + JSON.stringify(store.getState()));
});

store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'SUB',
    payload: 110
});

store.dispatch({
    type: 'SET_AGE',
    payload: 30
});