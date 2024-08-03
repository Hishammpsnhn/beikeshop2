// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducers.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;