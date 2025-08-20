import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterState = {
    count: number,
}

const initialState : CounterState = {
    count: 0,
}

const counter = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increase(state:CounterState) {
            state.count += 1;
        },
        decrease(state:CounterState) {
            state.count -= 1;
        },
        increaseBy(state:CounterState , action:PayloadAction<number>) {
            state.count += action.payload;
        },
    }
})

export const { increase, decrease, increaseBy } = counter.actions;
export default counter.reducer;
