import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addFeedback } from './feedback-operations';

const items = createReducer([], {
  [addFeedback.fulfilled]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [addFeedback.pending]: () => true,
  [addFeedback.fulfilled]: () => false,
  [addFeedback.rejected]: () => false,
});

const error = createReducer(null, {
  [addFeedback.rejected]: (_, { payload }) => payload,
  [addFeedback.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});
