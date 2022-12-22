import { useDispatch } from "react-redux";
import { setLoading } from "../store/slices/utilitiesSlice";

const useLoading = () => {
  const dispatch = useDispatch();

  const setGlobalLoading = (isLoading) => {
    dispatch(setLoading(isLoading))
  }

  return setGlobalLoading;
}

export default useLoading;