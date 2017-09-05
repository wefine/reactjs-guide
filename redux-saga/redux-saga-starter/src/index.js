import createReactClass from 'create-react-class';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, fork, put, select, spawn, take } from 'redux-saga/effects';

//============
// Reducer
//============
const defaultState = {
    color0: 'yellow',
    color1: 'red',
    color2: 'blue',
    count: 0,
};
const reducer = (state = defaultState, action) => {
    console.info(action.type);
    switch (action.type) {
        case 'SET_COLOR':
            let colorPos = 'color' + action.payload.pos;
            let newState = { ...state };
            newState[colorPos] = action.payload.color;

            return newState;
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
function setColor(color, pos) {
    return {
        type: 'SET_COLOR',
        payload: { color, pos }
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
const colors = ['red', 'blue', 'green', 'orange', 'gray', 'black', 'coffee', 'purple', 'pink'];

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

function* rootFlow() {
    // yield colorFlow();
    // yield colorFlowFork();
    yield colorFlowSpawn();
    console.log('流程完成')
}

function* colorFlow() {
    yield take('BUTTON_COUNT');
    for (let i = 0; i < 3; i++) {
        yield call(setColorGenerator, i)
    }
}

function* colorFlowFork() {
    yield take('BUTTON_COUNT');
    for (let i = 0; i < 3; i++) {
        yield fork(setColorGenerator, i)
    }
}

function* colorFlowSpawn() {
    yield take('BUTTON_COUNT');
    for (let i = 0; i < 3; i++) {
        yield spawn(setColorGenerator, i)
    }
}

function* setColorGenerator(pos) {
    let lastColor = yield select(state => state['color' + pos]);
    console.log(pos, '当前颜色是', lastColor);
    let color = yield getColorApi();
    console.log(pos, '修改后的颜色是', color);
    yield put(setColor(color, pos));
}

//============
// Components
//============
const mapStateToProps = (state = {}) => {
    return { ...state };
};
let Container = connect(mapStateToProps)(createReactClass({
    render: function () {
        const { count, dispatch, color0, color1, color2 } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: color0, width: '50px', height: '50px' }}>
                </div>
                <div style={{ backgroundColor: color1, width: '50px', height: '50px' }}>
                </div>
                <div style={{ backgroundColor: color2, width: '50px', height: '50px' }}>
                </div>

                <button onClick={() => dispatch(buttonCount())}>按钮</button>
                <h2>{count}</h2>
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
sagaMiddleware.run(rootFlow);


//============
// Output
//============
ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);