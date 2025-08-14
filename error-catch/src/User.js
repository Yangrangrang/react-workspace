import React from "react";

function User({user}) {
    // if (!user) return null; // error 가 발생하지 않음 (화면은 아무것도 안보이지만)

    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    );
}

export default User;