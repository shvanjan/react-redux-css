import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/authentication/LoginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer
  },

});
