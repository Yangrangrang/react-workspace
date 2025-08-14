import React, {useState} from "react";
import axios from "axios";
import {useAsync} from "react-async";
import UserAsync from "./UserAsync";

// https://jsonplaceholder.typicode.com/users

async function getUsers() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

function UsersAsync() {
    const [userId, setUserId] = useState(null);
    const {data:users, error, isLoading, reload, run} = useAsync({
        promiseFn: getUsers,
    })

    // if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!users) return <button onClick={run}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => <li key={user.id} onClick={() => setUserId(user.id)}>{user.name} ({user.username})</li>)}
            </ul>
            <button onClick={reload}>다시 불러오기</button>
            {/*{userId && <User id={userId}/>}*/}
            {userId && <UserAsync id={userId}/>}
        </>
    )

}

export default UsersAsync;