import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import { clearStore } from "../features/user/userSlice";

const customFetch = axios.create({
  baseURL: "https://jobs-react-api.onrender.com/api/v1",
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkForUnauthorizedResponse = (error, thunkApi) => {
  if (error.response.status === 401) {
    thunkApi.dispatch(clearStore());
    return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkApi.rejectWithValue(error.response.data.msg);
};

export default customFetch;
