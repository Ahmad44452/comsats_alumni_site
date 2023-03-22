import * as Styled from '../../Styles/ManageHOD/ManageHOD.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useState } from 'react';

const HodDeletePopup = ({ setIsDelPopupShowing, setDelHodObjId, delHodObjId, fetchHods }) => {

  const setIsGlobalLoading = useLoading();
  const [error, setError] = useState(null);

  const delHOD = async (id) => {

    try {
      setError(null);
      setIsGlobalLoading(true);
      const deletedUser = await axios.delete(`${process.env.REACT_APP_BACKEND_SERV}/api/deleteadmin`, { data: { _id: id } });

      if (deletedUser) {
        setDelHodObjId(null);
        setIsDelPopupShowing(false);
        await fetchHods();
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
            <Styled.DeleteButton color={'#2243ae'} onClick={() => { setIsDelPopupShowing(false); setDelHodObjId(null); }}>Cancel</Styled.DeleteButton>
            <Styled.DeleteButton color={'#DC0000'} onClick={() => delHOD(delHodObjId)}>Delete</Styled.DeleteButton>
          </Styled.DeleteButtonContainer>



        </Styled.DeleteContent>



      </Styled.Delete>

    </Styled.DeleteContainer >
  )
}

export default HodDeletePopup;