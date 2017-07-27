import { combineReducers, createStore } from 'redux';


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

const userReducer = (state = { name: 'Max', age: 18 }, action) => {
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

const store = createStore(combineReducers({ mathReducer, userReducer }));

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