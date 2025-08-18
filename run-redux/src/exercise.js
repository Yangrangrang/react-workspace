import {createStore} from "redux";

const initialState = {
    counter: 0,
    text: '',
    list: []
}

// 액션 타입
const INCRESE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성 함수는 보통 화살표 함수로 만든다.
const increase = () => ({
    type: INCRESE
});

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// state 초기상태을 설정해주어야함.
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCRESE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());

const listener  = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
// unsubscribe(); // 구독을 해지하고 싶다면 호출

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hi'));
store.dispatch(addToList({id:1, text: 'test'}))

window.store = store;   // store 인스턴스를 윈도우 콘솔에서 사용할수 있음.





