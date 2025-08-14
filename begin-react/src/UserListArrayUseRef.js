import React, { useEffect } from "react";

const User = React.memo(function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    /*
    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남.");
        // props -> state
        // REST API
        // D3 Video.js
        // setInterval, setTimeout
        return () => {  // 클린어함수를 일종의 뒷정리 함수라고 생각하면 됨.
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log("컴포넌트가 화면에서 사라짐.");
        }
    }, [])
     */

    /*
    useEffect(() => {
        console.log("user 값이 설정됨.")
        console.log(user);
        return () => {
            // 해당 함수가 변경 되기 전에는 clean-up 함수가 호출이 됨.
            console.log("user 값이 바뀌기 전")
            console.log(user);
        }
    }, [user]); // user 값이 설정되거나 바뀔때 마다 호출 (화면이 나타날때도 포함)
     */

    /*
    useEffect(() => {
        console.log(user);
    });
     */
    // deps 를 넣지 않을 경우, 컴포넌트가 리렌더링 되고 나서 호출이 됨. 설정이 바뀔 때,
    // 바뀌는 설정만 보여지는게 아니라 모든 컴포넌트에서 useEffect 가 실행됨.
    // 이유는 리액트 컴포넌트에서는 부모컴포넌트가 리렌더링 되면
    // 자식컴포넌트도 리렌더링 되기 때문에.

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={()=>onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

function UserListArrayUseRef({ users, onRemove, onToggle}) {
    const style = {
        marginTop: '20px'
    };

    return (
        <div style={style}>
            {
                users.map(
                /*
                 고유값이 없을 경우,
                 기본적으로 index 사용하게 되어있지만 단순히 index 를 넣었을 경우
                 성능적으로 좋아지거나 하지는 않다.
                 왠만해서는 피해주는게 좋다.
                 */
                    (user, index) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default React.memo(
    UserListArrayUseRef,
    (prevProps, nextProps) => nextProps.users === prevProps.users)
    // users 가 같다면 리렌더링 하지 않겠다.
    // 이렇게 사용할 때, 주의 사항은 나머지 props 가 정말로 고정적이여서 비교를 할 필요가 없는지 확인이 필요함
    // 현재 코드에서 만약 App.js 에서 함수형 업데이트(setUsers 에서 users => user.)를 하지 않았더라면, onRemove나 onToggle을 호출하게 될때,
    // 해당 함수에서 최신상태의 users 를 가리키고 있지 않기 때문에 심각한 오류가 생김.
;