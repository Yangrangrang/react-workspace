import React , { useState, useRef }from "react";

function InputSampleList() {
    const style = {
        marginTop: '20px'
    };

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);

        {/*
            객체 상태를 변경할 때에는,
            기존의 객체를 한번 복사하고
            거기에 특정 값을 덮어씌우고,
            새로운 상태로 설정 (불변성을 지킨다.)
        */}
        setInputs({
            ...inputs,   // 현재 상태의 내용이 들어옴.
            [name] : value,
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();  // current 가 해당 DOM 을 가르킴.
    }

    return (
        <div style={style}>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSampleList;