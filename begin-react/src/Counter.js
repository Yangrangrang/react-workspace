import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    {/*
        useState 는 배열 반환
        number : 현재 상태 값 (초기엔 0)
        setNumber : 상태를 변경할 때 사용하는 함수
    */}

    const onIncrease = () => {
        console.log('+1');
        setNumber( prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        console.log("-1");
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;