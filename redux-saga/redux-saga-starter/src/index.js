import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter';
import reducer from './reducers';
import { helloSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({ type });

ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
);

