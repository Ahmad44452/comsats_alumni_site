import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allImages: null
};

export const imgSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setAllImages: (state, action) => {
      state.allImages = action.payload
    }
  }
});

export const { setAllImages } = imgSlice.actions;
export default imgSlice.reducer;