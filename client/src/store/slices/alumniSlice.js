import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    registrationNumber: '',
    password: '',
    name: '',
    department: '',
    email: '',
    sector: '',
    supervisorName: '',
    officeEmail: '',
    contactNumber: '',
    graduationYear: '',
    positionHeld: '',
    dateOfJoining: '',
    organizationName: '',
    supervisorPosition: '',
    countryName: '',
    isPasswordComputerGenerated: ''
  },
  alumniAuth: false
};

export const alumniSlice = createSlice({
  name: 'alumni',
  initialState,
  reducers: {

    setDataAlumni: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      state.alumniAuth = true;
    },
    signOutAlumni: (state, action) => {
      state.data = initialState.data;
      state.alumniAuth = false;
    }
  }
});

export const { setDataAlumni, signOutAlumni } = alumniSlice.actions;
export default alumniSlice.reducer;