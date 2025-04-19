import customFetch from "../../utils/axios";
import { clearAllJobState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkApi) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkApi) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkApi) => {
  try {
    const resp = await customFetch.patch("/auth/updateUser", user);

    return resp.data;
  } catch (error) {
    // if token is invalid
    if (error.response.status === 401) {
      thunkApi.dispatch(logoutUser());
      return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
