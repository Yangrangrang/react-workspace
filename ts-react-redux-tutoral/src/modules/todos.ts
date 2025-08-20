import {createSlice, PayloadAction} from "@reduxjs/toolkit";

let nextId = 1;

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [] as Todo[];   // 이 배열은 비어 있지만, 앞으로 Todo 타입의 요소들만 들어옴

const todos = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo(state, action: PayloadAction<{text: string}>) {
            console.log(state, action);
            const newTodo : Todo = {
                id: nextId++,
                text: action.payload.text,
                done: false,
            }
            state.push(newTodo);
        },
        toggleTodo(state, action: PayloadAction<{id: number}>){
            console.log(state, action);
            const todo = state.find((i) => i.id === action.payload.id);
            if (todo) {
                todo.done = !todo.done;
            }
        },
        removeTodo(state, action: PayloadAction<{ id: number }>) {
            console.log(state, action);
            return state.filter(todo => todo.id !== action.payload.id); // 새 배열 반환
        },
    }
})

export const {addTodo, toggleTodo, removeTodo} = todos.actions;
export default todos.reducer;