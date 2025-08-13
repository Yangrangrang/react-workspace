import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
        <div style={{
            color
        }}>
            {isSpecial ? <b>*</b> : null}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name : '이름없음'
};

export default Hello;   // Hello 라는 컴포넌트를 만들어서 내보내겠다.