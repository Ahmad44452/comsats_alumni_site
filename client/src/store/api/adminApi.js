import axios from 'axios';
import { setUserData } from '../slices/userSlice';
import { setPeopleContactedData } from '../slices/peopleContactedSlice';

export const loadAllAlumnisApi = (pageNo) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/getalumni/${pageNo}`);

      dispatch(setUserData(res.data));

    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }

      console.log(errorMessage);

    }
  }
}

export const loadAllPeopleContactedApi = (pageNo) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/getcontacted/${pageNo}`);

      dispatch(setPeopleContactedData(res.data));

    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }

      console.log(errorMessage);

    }
  }
}