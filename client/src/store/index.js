import { configureStore } from "@reduxjs/toolkit";

// import userReducer from "./slices/userSlice";
// import numbersReducer from "./slices/numbersSlice";
import utilitesSlice from "./slices/utilitiesSlice";
import adminSlice from "./slices/adminSlice";

export const reduxStore = configureStore({
  reducer: {
    utilitesSlice,
    adminSlice
  }
})