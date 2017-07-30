import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger'
import math from './reducer/mathReducer';
import user from './reducer/userReducer';


import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

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
    combineReducers({math, user}),
    applyMiddleware(logger, thunk, promise())
);

store.subscribe(() => {
    console.log('updated state: ' + JSON.stringify(store.getState()));
});


export default store;