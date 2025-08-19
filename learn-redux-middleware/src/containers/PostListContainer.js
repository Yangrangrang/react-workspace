import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPosts} from "../modules/posts";
import PostLists from "../components/PostLists";

// TODO: RTX 리팩토링
function PostListContainer() {
    const {data, loading, error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    // 컴포넌트가 처음 마운트될때 API 요청
    useEffect(() => {
        if (data) return;   // 뒤로 가기 누르면 다시 렌더링 되는 부분 막기.
        dispatch(getPosts())
    }, [dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <PostLists posts={data}/>;
}

export default PostListContainer;