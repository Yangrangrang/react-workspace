import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";
import github from "./github/github";
import githubSlice from "./github/githubSlice";

const rootReducer = combineReducers({
    counter,
    todos,
    github,
    githubSlice
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;