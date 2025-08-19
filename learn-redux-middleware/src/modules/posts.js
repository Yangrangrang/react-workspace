// api 를 요청 하면, 요청이 진행중인 상태, 성공했을떄 데이터의 상태, 실패했다면 에러의 상태를 관리
import * as postsAPI from '../api/posts';
import {reducerUtils, createPromiseThunk, handleAsyncActions} from "../lib/asyncUtils";

// api 를 요청하기 위해 액션을 만들어야함.
// 각 api 마다 액션3개씩 만든다

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

// getPosts 라는 thunk 함수 생성
// export const getPosts = () => async dispatch => {
//     // 요청이 시작됨.
//     dispatch({type: GET_POSTS})
//     // API 를 호출.
//     try {
//         const posts = await postsAPI.getPosts();
//         // 성공했을 때
//         dispatch({
//             type: GET_POSTS_SUCCESS,
//             posts
//         })
//     } catch (e) {
//         // 실패했을 때
//         dispatch({
//             type: GET_POSTS_ERROR,
//             error: e
//         })
//     }
// };

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);

// export const getPost = id => async dispatch => {
//     // 요청이 시작됨.
//     dispatch({type: GET_POST})
//     // API 를 호출.
//     try {
//         const post = await postsAPI.getPostById(id);
//         // 성공했을 때
//         dispatch({
//             type: GET_POST_SUCCESS,
//             post
//         })
//     } catch (e) {
//         // 실패했을 때
//         dispatch({
//             type: GET_POST_ERROR,
//             error: e
//         })
//     }
// };

export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
export const clearPost = () => ({type: CLEAR_POST})

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
}

// 리듀서
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActions(GET_POST, 'post');

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial()
            }
        default:
            return state;
    }
};