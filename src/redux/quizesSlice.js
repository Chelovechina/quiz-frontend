import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { STATUS_ERROR, STATUS_LOADING, STATUS_SUCCESS } from '../utils/const';

export const fetchQuizes = createAsyncThunk('quizes/fetchQuizes', async () => {
  const { data } = await axios.get('https://chelovechina.pythonanywhere.com//');
  return data;
});

export const fetchSingleQuiz = createAsyncThunk('quizes/fetchSingleQuiz', async (id) => {
  const { data } = await axios.get(`https://chelovechina.pythonanywhere.com/${id}`);
  return data;
});

export const sendAnswers = createAsyncThunk('quizes/sendAnswers', async ({ id, payload }) => {
  const { data } = await axios.post(`https://chelovechina.pythonanywhere.com/${id}/save`, payload);
  return data;
});

const initialState = {
  quizes: [],
  currentQuiz: {},
  status: STATUS_LOADING,
  results: {},
};

const quizesSlice = createSlice({
  name: 'quizes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuizes.pending, (state) => {
      state.quizes = [];
      state.status = STATUS_LOADING;
    });
    builder.addCase(fetchQuizes.fulfilled, (state, action) => {
      state.quizes = action.payload;
      state.status = STATUS_SUCCESS;
    });
    builder.addCase(fetchQuizes.rejected, (state) => {
      state.quizes = [];
      state.status = STATUS_ERROR;
    });

    builder.addCase(fetchSingleQuiz.pending, (state) => {
      state.currentQuiz = {};
      state.status = STATUS_LOADING;
    });
    builder.addCase(fetchSingleQuiz.fulfilled, (state, action) => {
      state.currentQuiz = action.payload;
      state.status = STATUS_SUCCESS;
    });
    builder.addCase(fetchSingleQuiz.rejected, (state) => {
      state.currentQuiz = {};
      state.status = STATUS_ERROR;
    });

    builder.addCase(sendAnswers.pending, (state) => {
      state.status = STATUS_LOADING;
    });
    builder.addCase(sendAnswers.fulfilled, (state, action) => {
      state.results = action.payload;
      state.status = STATUS_SUCCESS;
    });
    builder.addCase(sendAnswers.rejected, (state) => {
      state.status = STATUS_ERROR;
    });
  },
});

export const getQuizesState = (state) => state.quizes;
export const getScore = (state) => state.quizes.results.score;

export default quizesSlice.reducer;
