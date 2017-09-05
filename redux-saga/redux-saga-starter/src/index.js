import createReactClass from 'create-react-class';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, select, take } from 'redux-saga/effects';

//============
// Reducer
//============
const defaultState = {
    color: 'yellow',
    count: 0,
};
const reducer = (state = defaultState, action) => {
    console.info(action.type);
    switch (action.type) {
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload,
            };
        case 'BUTTON_COUNT':
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return { ...state };
    }
};

//============
// Actions
//============
function setColor(color) {
    return {
        type: 'SET_COLOR',
        payload: color
    };
}

function buttonCount() {
    return {
        type: 'BUTTON_COUNT',
        payload: ''
    }
}

//============
// APIs
//============
const colors = ['red', 'blue', 'green', 'orange', 'gray', 'black', 'coffee', 'purple', 'pink']

function getColorApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            resolve(randomColor);
        }, 1500);
    });
}

//================
// Saga (Monitor)
//================

function* colorFlow() {
    yield take('BUTTON_COUNT');
    let lastColor = yield select(state => state.color);
    console.log('原来的颜色是', lastColor);
    let color = yield getColorApi();

    yield put(setColor(color));
}

//============
// Components
//============
const mapStateToProps = (state = {}) => {
    return { ...state };
};
let Container = connect(mapStateToProps)(createReactClass({
    render: function () {
        const { count, dispatch, color } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: color, width: '200px', height: '200px' }}>

                </div>
                <h2> {count} </h2>
                <button onClick={() => dispatch(buttonCount())}>点击计数</button>
            </div>
        );
    }
}));

//============
// Store
//============
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(colorFlow);


//============
// Output
//============
ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);