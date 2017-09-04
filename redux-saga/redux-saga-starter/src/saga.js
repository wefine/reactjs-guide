import { delay } from 'redux-saga';
import { all, put, takeEvery } from 'redux-saga/effects';

export function* helloSaga() {
    yield;
    console.log('Hello Sagas!');
}

export function* incrementAsync() {
    console.log("incrementAsync 1");
    yield delay(1000);
    console.log("incrementAsync 2");
    yield put({ type: 'INCREMENT' });
    console.log("incrementAsync 3");
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// 單一進入點，一次啟動所有 Saga
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}