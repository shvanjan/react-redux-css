import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userInfo:  {
    name: "",
    permissions: {
      read_configuration: false,
      can_edit: false,
      read_logs: false,
      is_admin: false
    }
  }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const autheticateUser = createAsyncThunk(
  'login/autheticateUser',
  async (credentials) => {
    const response = await autheticateUserAPI(credentials);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// A mock function to mimic making an async request for data
function autheticateUserAPI() {
  return new Promise((resolve) => {
    
  });
}


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = {...payload};
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    }
    
  }
  
});


export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
