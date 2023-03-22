import * as Styled from '../../Styles/ManageAdmins/ManageAdmins.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useState } from 'react';

const AdminDeletePopup = ({ setIsDelPopupShowing, setDelUserObjId, delUserObjId, fetchAdmins }) => {

  const setIsGlobalLoading = useLoading();
  const [error, setError] = useState(null);

  const delAdmin = async (id) => {

    try {
      setError(null);
      setIsGlobalLoading(true);
      const deletedUser = await axios.delete(`${process.env.REACT_APP_BACKEND_SERV}/api/deleteadmin`, { data: { _id: id } });

      if (deletedUser) {
        setDelUserObjId(null);
        setIsDelPopupShowing(false);
        fetchAdmins();
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
    <Styled.DeleteContainer>

      <Styled.Delete>

        <Styled.DeleteContent>


          <Styled.DeleteText>
            Are you sure you want to delete?
          </Styled.DeleteText>

          <Styled.DeleteErrorText>
            {error}
          </Styled.DeleteErrorText>



          <Styled.DeleteButtonContainer>
            <Styled.DeleteButton color={'#2243ae'} onClick={() => { setDelUserObjId(null); setIsDelPopupShowing(false); }}>Cancel</Styled.DeleteButton>
            <Styled.DeleteButton color={'#DC0000'} onClick={() => delAdmin(delUserObjId)}>Delete</Styled.DeleteButton>
          </Styled.DeleteButtonContainer>



        </Styled.DeleteContent>



      </Styled.Delete>

    </Styled.DeleteContainer >
  )
}

export default AdminDeletePopup;