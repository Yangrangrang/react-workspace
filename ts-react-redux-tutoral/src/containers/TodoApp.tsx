import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import TodoInsert from "../components/todo/TodoInsert";
import {addTodo, toggleTodo, removeTodo} from "../modules/todos";
import TodoList from "../components/todo/TodoList";

export default function TodoApp() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <TodoInsert onInsert={(text) => dispatch(addTodo({text}))}/>
            <TodoList
                todos={todos}
                onToggle={(id) => dispatch(toggleTodo({id}))}
                onRemove={(id) => dispatch(removeTodo({id}))}
            />
        </>
    )
};