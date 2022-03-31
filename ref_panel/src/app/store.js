import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/authentication/LoginSlice';
import errorReducer from '../features/errors/errorSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    errorHandler: errorReducer
  }

});