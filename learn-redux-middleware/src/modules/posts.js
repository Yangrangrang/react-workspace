// api 를 요청 하면, 요청이 진행중인 상태, 성공했을떄 데이터의 상태, 실패했다면 에러의 상태를 관리
import * as postsAPI from '../api/posts';
import {
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById,
    createPromiseSaga,
    createPromiseSagaById
} from "../lib/asyncUtils";
// import {call, put, takeEvery} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga/effects';

// api 를 요청하기 위해 액션을 만들어야함.
// 각 api 마다 액션3개씩 만든다

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

//기존 Thunk 함수 대신,
export const getPosts = () => ({type: GET_POSTS});
export const getPost = (id) => ({
    type: GET_POST,
    payload: id,    // api 호출 할때, 이 값을 파라미터로 사용하기 위해
    meta: id        // 리듀서에서 처리할때 사용
})

// function* getPostsSaga() {
//     try {
//         const posts = yield call(postsAPI.getPosts);
//         // getPosts라는 api 호출 되면 프로미스 반환
//         // yield call 통해서 프로미스가 끝날때까지 기다렸다가 그 결과물이 posts 에 담김
//         yield put({
//             type: GET_POSTS_SUCCESS,
//             payload: posts,
//         });
//     } catch (e) {
//         yield put({
//             type: GET_POSTS_ERROR,
//             payload: e,
//             error: true,
//         });
//     }
// }

// function* getPostSaga(action) {
//     const id = action.payload;
//     try {
//         const post = yield call(postsAPI.getPostById, id);
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post,
//             meta: id
//         });
//     } catch (e) {
//         yield put({
//             type: GET_POST_ERROR,
//             payload: e,
//             error: true,
//         });
//     }
// }

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById)

export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
}

export const clearPost = () => ({type: CLEAR_POST})

const initialState = {
    posts: reducerUtils.initial(),
    post: {},
}

// 리듀서
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);

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