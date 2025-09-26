import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: null,
  accessToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    setCredential: (state, action) => {
      const { username, accessToken } = action.payload;
      state.username = username;
      state.accessToken = accessToken;
    },


    // logout: (state) => {
    //   state.username = null;
    //   state.accessToken = null;
    // }
    
    logout: () => initialState

  },
})

// Action creators are generated for each case reducer function
export const { setCredential, logout } = authSlice.actions

export default authSlice.reducer