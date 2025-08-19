import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Post from "../components/Post";
import {clearPost, getPost} from "../modules/posts";
import {reducerUtils} from "../lib/asyncUtils";
import {useNavigate} from "react-router-dom";

function PostContainer({postId}) {
    const navigate = useNavigate();
    // 가장 처음엔 state.posts.post[postId] 값이 undefined 여서 에러가남. 해서 || {} 추가
    const {data, loading, error} = useSelector(
        state => state.posts.post[postId] || reducerUtils.initial()
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(getPost(postId));
        // return () => {
        //     dispatch(clearPost());
        // }
    }, [postId, dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null

    return (
        <>
            <button onClick={() => navigate('/')}>홈으로 이동</button>
            <Post post={data}/>
        </>
    )
}

export default PostContainer;