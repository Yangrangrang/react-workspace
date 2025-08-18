import {configureStore,createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    text: '',
    list: []
}

// slice 정의
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase(state) {
            state.counter += 1;
        },
        decrease(state) {
            state.counter -= 1;
        },
        changeText(state, action) {
            state.text = action.payload;
        },
        addToList(state, action) {
            state.list.push(action.payload);
        },
    },
});

// 액션과 리듀서 추출
const { increase, decrease, changeText, addToList } = counterSlice.actions;
const reducer = counterSlice.reducer;

// 스토어 생성
const store = configureStore({
    reducer,
});

// 리스너
const listener = () => {
    console.log('state changed:', store.getState());
};

// 구독
const unsubscribe = store.subscribe(listener);

// 액션 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '할 일 추가하기' }));

// 콘솔에서 접근 가능하게
window.store = store;
window.increase = counterSlice.actions.increase;
window.decrease = counterSlice.actions.decrease;
window.unsubscribe = unsubscribe;