import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../ReduxLogin/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});