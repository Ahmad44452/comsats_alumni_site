import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
};

export const peopleContactedSlice = createSlice({
  name: 'peoplecontacted',
  initialState,
  reducers: {
    setPeopleContactedData: (state, action) => {

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

export const { setPeopleContactedData } = peopleContactedSlice.actions;
export default peopleContactedSlice.reducer;