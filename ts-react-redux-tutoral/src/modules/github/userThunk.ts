import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile } from "../../api/github";
import { GithubProfile } from "../../api/github";

// username을 인자로 받는 thunk
export const fetchUserProfile = createAsyncThunk<
    GithubProfile,           // 반환 타입
    string,                  // 입력 타입
    { rejectValue: string }  // reject 될 때 payload 타입
>(
    "user/fetchUserProfile",
    async (username, thunkAPI) => {
        try {
            const data = await getUserProfile(username);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to fetch profile");
        }
    }
);
