import * as StyledAdmin from '../../Styles/AdminPanel.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useState } from 'react';
import { loadAllStudentsApi } from '../../store/api/adminApi';
import { useDispatch } from 'react-redux';

const AdminPanelDeletePopup = ({ setIsDelPopupShowing, setDelUserObjId, delUserObjId }) => {

  const setIsGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const delAlumni = async (id) => {

    try {
      setError(null);
      setIsGlobalLoading(true);
      const deletedUser = await axios.delete(`${process.env.REACT_APP_BACKEND_SERV}/api/deletealumni`, { data: { _id: id } });

      if (deletedUser) {
        setIsDelPopupShowing(false);
        dispatch(loadAllStudentsApi());
      }

      setIsGlobalLoading(false);

    } catch (err) {
      setIsGlobalLoading(false);
      if (err.response)
        setError(err.response.data.message);
      else
        setError('Could not reach server!');
    }

  }

  return (
    <StyledAdmin.StyledAdminPanelDeleteContainer>

      <StyledAdmin.StyledAdminPanelDelete>

        <StyledAdmin.StyledAdminPanelDeleteContent>


          <StyledAdmin.StyledAdminPanelDeleteText>
            Are you sure you want to delete?
          </StyledAdmin.StyledAdminPanelDeleteText>

          <StyledAdmin.StyledAdminPanelDeleteErrorText>
            {error}
          </StyledAdmin.StyledAdminPanelDeleteErrorText>



          <StyledAdmin.StyledAdminPanelDeleteButtonContainer>
            <StyledAdmin.StyledAdminPanelDeleteButton color={'#2243ae'} onClick={() => { setIsDelPopupShowing(false); setDelUserObjId(null); }}>Cancel</StyledAdmin.StyledAdminPanelDeleteButton>
            <StyledAdmin.StyledAdminPanelDeleteButton color={'#DC0000'} onClick={() => delAlumni(delUserObjId)}>Delete</StyledAdmin.StyledAdminPanelDeleteButton>
          </StyledAdmin.StyledAdminPanelDeleteButtonContainer>



        </StyledAdmin.StyledAdminPanelDeleteContent>



      </StyledAdmin.StyledAdminPanelDelete>

    </StyledAdmin.StyledAdminPanelDeleteContainer >
  )
}

export default AdminPanelDeletePopup;