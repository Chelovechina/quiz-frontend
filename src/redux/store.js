import { configureStore } from '@reduxjs/toolkit';
import quizesReducer from './quizesSlice';

export const store = configureStore({
  reducer: {
    quizes: quizesReducer,
  },
});
