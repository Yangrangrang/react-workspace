import {all} from 'redux-saga/effects';
import githubSaga from './github/githubSaga';

export default function* rootSaga() {
    yield all([
        githubSaga(),
    ])
};
