import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from '../src/slice/sectionSlice';

export const store = configureStore({
  reducer: {
    section: sectionReducer,
  },
});
