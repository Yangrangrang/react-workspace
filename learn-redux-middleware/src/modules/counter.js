import {createSlice} from "@reduxjs/toolkit";

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

export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase());   // 비동기적으로 increase 액션 디스패치
    }, 1000)
}

export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000)
}


export const {increase, decrease} = counter.actions;
export default counter.reducer;