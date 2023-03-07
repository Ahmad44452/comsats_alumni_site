import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
};

export const peopleContactedSlice = createSlice({
  name: 'peoplecontacted',
  initialState,
  reducers: {

    setPeopleContactedData: (state, action) => {
      state.data = [...action.payload];
    }
  }
});

export const { setPeopleContactedData } = peopleContactedSlice.actions;
export default peopleContactedSlice.reducer;