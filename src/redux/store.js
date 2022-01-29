import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import feedbackReducer from './feedback/feedback-reducer';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  //   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
