import userReducer from '../slice/userslice'
import chatReducer from '../slice/chatslice'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
