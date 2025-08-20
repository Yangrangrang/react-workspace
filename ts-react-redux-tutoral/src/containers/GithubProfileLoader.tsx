import React from "react";
import GithubUsernameForm from "../components/github/GithubUsernameForm";
import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../modules";
import {fetchUserProfile} from "../modules/github/userThunk";
import type {AppDispatch, RootState} from "../modules/store";
import GithubProfileInfo from "../components/github/GithubProfileInfo";

export default function GithubProfileLoader() {

    const {data, loading, error} = useSelector((state: RootState) => state.github.userProfile);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (username: string) => {
        dispatch(fetchUserProfile(username));
    };

    return (
        <>
            <GithubUsernameForm onSubmitUsername={handleSubmit}/>
            {loading && <p style={{textAlign: 'center' }}>로딩중...</p>}
            {error && <p style={{textAlign: 'center' }}>에러발생!</p>}
            {data &&
                (<GithubProfileInfo
                    name={data.name}
                    thumbnail={data.avatar_url}
                    bio={data.bio}
                    blog={data.blog}/>
                )}
        </>
    )
};