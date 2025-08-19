import {createSlice} from "@reduxjs/toolkit";
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

const counter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
    }
})

function* increaseSaga() {
    yield delay(1000);
    yield put(counter.actions.increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(counter.actions.decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 액션 생성자
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

export const {increase, decrease} = counter.actions;
export default counter.reducer;