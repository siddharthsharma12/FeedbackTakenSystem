import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../CopyRedux/authSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});