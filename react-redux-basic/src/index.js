import { createStore } from 'redux';

const initialState = {
    result: 1,
    lastValues: [],
    name: 'Wefine'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case 'SUBTRACT':
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

const store = createStore(reducer);

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