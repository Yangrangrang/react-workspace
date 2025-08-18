import {createSlice} from "@reduxjs/toolkit";

let nextId = 1;

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        // 객체로 작성 하는 이유는 payload 를 커스터마이징 할 때, prepare필요
        addTodo: {
            reducer(state, action) {
                state.push(action.payload);
            },
            // payload 안의 구조를 직접 만들고 싶을 때 쓰는 함수.
            prepare(text) {
                return {
                    payload: {
                        id: nextId++,
                        text,
                        done: false
                    }
                };
            }
        },
        // 함수로 작성, 단순한 payload 하나만 받을 때,
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        }
    }
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;