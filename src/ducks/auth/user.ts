import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { postman } from "../../utils/postman";
import { AUTH_API, TYPE_API } from "../../constants/general";

export interface UserDataRequest {
  login: string;
  password: string;
}

export interface UserCreateDataRequest {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
}

const initialState = {
  currentUser: {},
  loading: false,
}

const userAdapter = createEntityAdapter();

export const signInUserRequest = createAsyncThunk(
  'signInUserRequest',
  async (data: UserDataRequest, { rejectWithValue }) => {
    try {
      return await postman.post(`${TYPE_API.AUTH}${AUTH_API.IN}`,data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
)

export const signOutUserRequest = createAsyncThunk(
  'signOutUserRequest',
  async (data: UserCreateDataRequest, { rejectWithValue }) => {
    try {
      return await postman.post(`${TYPE_API.AUTH}${AUTH_API.OUT}`,data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
)

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: userAdapter.getInitialState(initialState),
  reducers: {
    
  },
  extraReducers: builder => {
    builder
      .addCase(signInUserRequest.pending, state => {
        state.loading = true;
      })
      .addCase(signInUserRequest.fulfilled, (state,{ payload }) => {
        state.currentUser = payload.data;
        state.loading = false;
      })
      .addCase(signInUserRequest.rejected, state => {
        state.loading = false;
      })
      .addCase(signOutUserRequest.pending, state => {
        state.loading = true;
      })
      .addCase(signOutUserRequest.fulfilled, (state,{ payload }) => {
        state.currentUser = payload.data;
        state.loading = false;
      })
      .addCase(signOutUserRequest.rejected, state => {
        state.loading = false;
      })
    }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stateSelector = (state: any) => state.user
export const currentUserSelector = createSelector(stateSelector, state => state.currentUser)
export const postLoadingSelector = createSelector(stateSelector, state => state.loading)

const { reducer } = userSlice;


export default reducer;