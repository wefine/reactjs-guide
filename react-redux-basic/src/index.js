import {createStore} from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state += action.payload;
            break;
        case "SUB":
            state -= action.payload;
            break;
        default:
            break;
    }

    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("updated state: " + store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUB",
    payload: 110
});