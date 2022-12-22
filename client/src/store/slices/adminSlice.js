import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    email: '',
    name: ''
  },
  adminAuth: false
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {

    setDataAdmin: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      state.adminAuth = true;
    },
    signOutAdmin: (state, action) => {
      state.data = initialState.data;
      state.adminAuth = false;
    }
  }
});

export const { setDataAdmin, signOutAdmin } = adminSlice.actions;
export default adminSlice.reducer;