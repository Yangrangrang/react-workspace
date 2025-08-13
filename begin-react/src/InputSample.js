import React , { useState }from "react";

function InputSample() {
    const style = {
        marginTop: '20px'
    };

    const [text, setText] = useState("");

    const onChange = (e) => {
        // e : 이벤트 객체
        // e.target : 이벤트가 발생한 DOM 에 대한 정보
        // e.target.value : 현재 이 DOM이 가지고 있는 값
        console.log(e.target.value);
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div style={style}>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;