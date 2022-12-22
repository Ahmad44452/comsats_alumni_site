import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
};

export const utilitesSlice = createSlice({
  name: 'utilites',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setLoading } = utilitesSlice.actions;
export default utilitesSlice.reducer;