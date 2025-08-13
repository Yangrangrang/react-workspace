import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList() {
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
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    );
}

export default UserList;