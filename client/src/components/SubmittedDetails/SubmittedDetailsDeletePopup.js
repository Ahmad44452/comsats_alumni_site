import * as StyledAdmin from '../../Styles/SubmittedDetails/SubmittedDetails.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useState } from 'react';
import { loadAllAlumnisApi } from '../../store/api/adminApi';
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
        dispatch(loadAllAlumnisApi());
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
    <StyledAdmin.SubmittedDetailsDeleteContainer>

      <StyledAdmin.SubmittedDetailsDelete>

        <StyledAdmin.SubmittedDetailsDeleteContent>


          <StyledAdmin.SubmittedDetailsDeleteText>
            Are you sure you want to delete?
          </StyledAdmin.SubmittedDetailsDeleteText>

          <StyledAdmin.SubmittedDetailsDeleteErrorText>
            {error}
          </StyledAdmin.SubmittedDetailsDeleteErrorText>



          <StyledAdmin.SubmittedDetailsDeleteButtonContainer>
            <StyledAdmin.SubmittedDetailsDeleteButton color={'#2243ae'} onClick={() => { setIsDelPopupShowing(false); setDelUserObjId(null); }}>Cancel</StyledAdmin.SubmittedDetailsDeleteButton>
            <StyledAdmin.SubmittedDetailsDeleteButton color={'#DC0000'} onClick={() => delAlumni(delUserObjId)}>Delete</StyledAdmin.SubmittedDetailsDeleteButton>
          </StyledAdmin.SubmittedDetailsDeleteButtonContainer>



        </StyledAdmin.SubmittedDetailsDeleteContent>



      </StyledAdmin.SubmittedDetailsDelete>

    </StyledAdmin.SubmittedDetailsDeleteContainer >
  )
}

export default AdminPanelDeletePopup;