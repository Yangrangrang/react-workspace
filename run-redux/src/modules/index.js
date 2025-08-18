import {combineReducers} from "redux";
// import counter from "./counter";
// import todos from "./todos";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";

const rootReducer = combineReducers({
    // counter,
    // todos
    counter: counterSlice,
    todos: todosSlice
});

export default rootReducer;