import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isError: false,
  errorMessage: "error ocurred"
};





export const errorSlice = createSlice({
  name: 'errorHandler',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setError: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isError = payload.isError;
      state.errorMessage = payload.message;
      // alert("errorMessage");
    }
    
  }
  
});

export const selectIsError = (state) => state.errorHandler.isError;
export const selectErrorMessage = (state) => state.errorHandler.errorMessage;

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
