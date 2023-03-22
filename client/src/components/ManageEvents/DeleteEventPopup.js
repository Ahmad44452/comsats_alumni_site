import * as Styled from '../../Styles/ManageEvents/ManageEvents.styled';
import axios from 'axios';
import { useState } from 'react';
import useLoading from '../../hooks/useLoading';

const DeleteEventPopup = ({ setIsDelPopupShowing, setDelEventObjId, delEventObjId, fetchEvents }) => {

  const setIsGlobalLoading = useLoading();
  const [error, setError] = useState(null);

  const delEvent = async (id) => {

    try {
      setError(null);
      setIsGlobalLoading(true);
      const deletedEvent = await axios.delete(`${process.env.REACT_APP_BACKEND_SERV}/img/deleteevent`, { data: { _id: id } });

      if (deletedEvent) {
        await fetchEvents();
        setIsDelPopupShowing(false);
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
            <Styled.DeleteButton color={'#2243ae'} onClick={() => { setIsDelPopupShowing(false); setDelEventObjId(null); }}>Cancel</Styled.DeleteButton>
            <Styled.DeleteButton color={'#DC0000'} onClick={() => delEvent(delEventObjId)}>Delete</Styled.DeleteButton>
          </Styled.DeleteButtonContainer>



        </Styled.DeleteContent>

      </Styled.Delete>

    </Styled.DeleteContainer >
  )
}

export default DeleteEventPopup;