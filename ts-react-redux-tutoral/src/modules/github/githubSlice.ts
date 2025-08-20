import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GithubProfile } from '../../api/github';

type GithubState = {
    userProfile: {
        loading: boolean;
        data: GithubProfile | null;
        error: string | null;
    };
};

const initialState: GithubState = {
    userProfile: {
        loading: false,
        data: null,
        error: null,
    },
};

const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        fetchUserProfileRequest(state, action: PayloadAction<string>) {
            console.log(state, action);
            state.userProfile.loading = true;
            state.userProfile.error = null;
            state.userProfile.data = null;
        },
        fetchUserProfileSuccess(state, action: PayloadAction<GithubProfile>) {
            state.userProfile.loading = false;
            state.userProfile.data = action.payload;
        },
        fetchUserProfileFailure(state, action: PayloadAction<string>) {
            state.userProfile.loading = false;
            state.userProfile.error = action.payload;
        },
    },
});

export const {
    fetchUserProfileRequest,
    fetchUserProfileSuccess,
    fetchUserProfileFailure,
} = githubSlice.actions;

export default githubSlice.reducer;
