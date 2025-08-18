import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',    // 슬라이스(모듈)의 이름 지정.
    initialState: {number: 0, diff: 1},
    reducers: {
        setDiff(state, action) {
            state.diff = action.payload;
        },
        increase(state){
            state.number += state.diff;
        },
        decrease(state) {
            state.number -= state.diff;
        },
    }
})

export const {setDiff, increase, decrease} = counterSlice.actions;
export default counterSlice.reducer;