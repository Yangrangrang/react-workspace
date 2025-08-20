import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GithubProfile} from "../../api/github";
import {fetchUserProfile} from "./userThunk";

type GithubState = {
    userProfile: {
        loading: boolean;
        data: GithubProfile | null;
        error: string | null;
    }
}

const initialState : GithubState = {
    userProfile: {
        loading:false,
        data: null,
        error: null,
    }
}

const github = createSlice({
    name: 'github',
    initialState: initialState,
    reducers: {}, // 일반 reducer 필요 없으면 비워둠
    extraReducers: (builder) => {
        builder
            // pending : thunk 함수가 실행되기 시작했을때,
            .addCase(fetchUserProfile.pending, (state) => {
                state.userProfile.loading = true;
                state.userProfile.error = null;
            })
            // fulfilled : thunk 함수가 성공적으로 끝났을 때,
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.userProfile.loading = false;
                state.userProfile.data = action.payload;
            })
            // rejected : thunk 함수가 실패 했을 때,
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.userProfile.loading = false;
                state.userProfile.error = action.error.message ?? "알 수 없는 에러";
            });
    },
})


export default github.reducer;