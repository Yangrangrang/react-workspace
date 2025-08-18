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
        }
    }
})

export const {increase, decrease} = counter.actions;
export default counter.reducer;