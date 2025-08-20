import React from 'react';
import './App.css';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
    const onclick = () => {
        console.log("test");
    }
    const onSubmit = (form:{name:string; description:string}) => {
        console.log(form);
    }
    return (
        <>
            <Greetings name={'han'} onClick={onclick}/>
            <Greetings onClick={onclick}/>
            <Counter/>
            <MyForm onSubmit={onSubmit}/>
            <ReducerSample/>
        </>
    );
}

export default App;
