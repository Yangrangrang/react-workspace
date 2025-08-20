import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;
// 리덕스스토어에서 관리하고 상태에 대한 타입 생성
export type RootState = ReturnType<typeof rootReducer>;