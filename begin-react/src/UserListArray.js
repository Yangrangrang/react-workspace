import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserListArray() {
    const style = {
        marginTop: '20px'
    };

    const users = [
        {
            id:1,
            username:'hanna1',
            email:'test1@gmail.com'
        },
        {
            id:2,
            username:'hanna2',
            email:'test2@gmail.com'
        },
        {
            id:3,
            username:'hanna3',
            email:'test3@gmail.com'
        },
    ];

    return (
        <div style={style}>
            {users.map(
                /*
                 고유값이 없을 경우,
                 기본적으로 index 사용하게 되어있지만 단순히 index 를 넣었을 경우
                 성능적으로 좋아지거나 하지는 않다.
                 왠만해서는 피해주는게 좋다.
                 */
                (user, index) => (<User user={user} key={user.id}/>)
            )}
        </div>
    );
}

export default UserListArray;