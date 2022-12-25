import AlumniPanelChangePass from "./AlumniPanelChangePass";
import AlumniPanelSubmitInfo from './AlumniPanelSubmitInfo';
import { useSelector } from "react-redux";

const AdminPanel = () => {

  const isPasswordComputerGenerated = useSelector(state => state.alumniSlice.data.isPasswordComputerGenerated)

  return (
    isPasswordComputerGenerated ? <AlumniPanelChangePass /> : <AlumniPanelSubmitInfo />
  )
}

export default AdminPanel;