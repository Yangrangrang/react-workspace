import React, {useContext, useRef} from "react";
import {UserDispatch} from "./AppRefectory";
import useInputsReducer from "./useInputsReducer";

function CreateUserRefectory() {
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);

    const [state, onChange, reset] = useInputsReducer({
        username: '',
        email: ''
    })
    const {username, email} = state;

    return (
        <div style={
            {marginTop: '20px'}
        }>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={() => {
                dispatch({
                    type: 'CREATE_USER',
                    user: {
                        id: nextId.current,
                        username,
                        email
                    }
                });
                reset();
                nextId.current += 1;
            }}>등록</button>
        </div>
    )

}

export default React.memo(CreateUserRefectory);
