import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFeedbackAction } from './feedback-actions';
import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:3000';

const url = '/feedback';

export const addFeedback = createAsyncThunk(addFeedbackAction, async item => {
  console.log(item);
  const feedback = await axios.post(url, item);
  return feedback.data;
});
