import React from 'react';
import './App.css';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

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
        </>
    );
}

export default App;
