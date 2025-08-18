import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function HistorySample() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);   // 이전 페이지로
    }

    const goHome = () => {
        navigate('/') // 특정 url 이동
    };

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;