import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUserData: (state, action) => {

      if (state.data && state.data.docs) {
        if (state.data.page !== action.payload.page) {
          const previousDocs = state.data.docs;
          state.data = action.payload;
          state.data.docs = [...previousDocs, ...action.payload.docs];
        }
      } else {
        state.data = action.payload;
      }

    }
  }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;