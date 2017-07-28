import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import mathReducer from './reducer/mathReducer';
import userReducer from './reducer/userReducer';

const logger = createLogger({
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
    combineReducers({ math: mathReducer, user: userReducer }),
    applyMiddleware(logger)
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

export default store;