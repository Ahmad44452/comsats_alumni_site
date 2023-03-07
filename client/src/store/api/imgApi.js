import axios from 'axios';

import { setAllImages } from '../slices/imageSlice';

export const loadAllImagessApi = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/img/getall`);

      dispatch(setAllImages(res.data));

    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }

    }
  }
}