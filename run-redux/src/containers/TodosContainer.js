import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import Todos from "../components/Todos";
import {addTodo, toggleTodo} from "../modules/todosSlice";

function TodosContainer() {
    // useSelector 에서의 state 는 Redux의 전체 store 상태 객체를 의미
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback(text => dispatch(addTodo(text)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggleTodo(id)),[dispatch]);

    return <Todos
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
    />
}

export default TodosContainer;