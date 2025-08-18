import React from "react";
import {useLocation} from "react-router-dom";
import qs from 'qs';

function About() {
// function About({location}) { // React Router v6에서는 location prop이 자동으로 안 넘어옴
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    console.log(location);
    console.log(query);

    const detail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>
            <p>
                이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트.
            </p>
            {detail && <p>detail 값이 true 입니다.</p>}
        </div>
    );
}

export default About;