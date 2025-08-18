// api 를 요청 하면, 요청이 진행중인 상태, 성공했을떄 데이터의 상태, 실패했다면 에러의 상태를 관리
import * as postsAPI from '../api/posts';
import {reducerUtils} from "../lib/asyncUtils";

// api 를 요청하기 위해 액션을 만들어야함.
// 각 api 마다 액션3개씩 만든다

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// getPosts 라는 thunk 함수 생성
export const getPosts = () => async dispatch => {
    // 요청이 시작됨.
    dispatch({type: GET_POSTS})
    // API 를 호출.
    try {
        const posts = await postsAPI.getPosts();
        // 성공했을 때
        dispatch({
            type: GET_POSTS_SUCCESS,
            posts
        })
    } catch (e) {
        // 실패했을 때
        dispatch({
            type: GET_POSTS_ERROR,
            error: e
        })
    }
};

export const getPost = id => async dispatch => {
    // 요청이 시작됨.
    dispatch({type: GET_POST})
    // API 를 호출.
    try {
        const post = await postsAPI.getPostById(id);
        // 성공했을 때
        dispatch({
            type: GET_POST_SUCCESS,
            post
        })
    } catch (e) {
        // 실패했을 때
        dispatch({
            type: GET_POST_ERROR,
            error: e
        })
    }
};

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading(),
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.posts),
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.error),
            }
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading(),
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.post),
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.error),
            }
        default:
            return state;
    }
};