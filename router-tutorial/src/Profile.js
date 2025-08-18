import React from "react";
import {useParams} from "react-router-dom";

const profileData = {
    velopert: {
        name: '홍길동',
        description: 'Frontend Engineer'
    },
    homer: {
        name: '호머 심슨',
        description: ' 심슨가족에 나오는 아빠 캐릭터'
    },
}

function Profile() {
    // const {username} = match.params;    // v6 에서는 match 안 들어옴.
    const {username} = useParams();
    console.log(username);

    const profile = profileData[username];
    console.log(profile);

    if (!profile) {
        return <div>존재 하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;