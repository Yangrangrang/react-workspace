import React from 'react';
import './App.css';
import {SampleProvider} from "./SampleContext";
import ReducerSample from "./ReducerSample";

function App() {
    return (
        <>
            <SampleProvider>
                <ReducerSample />
            </SampleProvider>
        </>
    );
}

export default App;
