import axios from 'axios';
import { setUserData } from '../slices/userSlice';


export const loadAllStudentsApi = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/getalumni`);

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