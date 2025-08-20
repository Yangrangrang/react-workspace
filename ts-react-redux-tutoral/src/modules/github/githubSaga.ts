import { delay, call, put, takeLatest } from 'redux-saga/effects';
import {getUserProfile, GithubProfile} from '../../api/github';
import {
    fetchUserProfileRequest,
    fetchUserProfileSuccess,
    fetchUserProfileFailure,
} from './githubSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';

function* fetchUserProfileSaga(action: PayloadAction<string>): SagaIterator {
    try {
        const data: GithubProfile = yield call(getUserProfile, action.payload);
        console.log(data);
        yield delay(1000);
        yield put(fetchUserProfileSuccess(data));
    } catch (e) {
        yield put(fetchUserProfileFailure('프로필 조회 실패'));
    }
}

export default function* githubSaga(): SagaIterator {
    yield takeLatest(fetchUserProfileRequest.type, fetchUserProfileSaga);
}