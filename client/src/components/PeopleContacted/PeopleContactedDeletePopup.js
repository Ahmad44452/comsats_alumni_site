import * as PeopleContacted from '../../Styles/PeopleContacted/PeopleContacted.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useState } from 'react';
import { loadAllPeopleContactedApi } from '../../store/api/adminApi';
import { useDispatch } from 'react-redux';

const PeopleContactedDeletePopup = ({ setIsDelPopupShowing, setDelUserObjId, delUserObjId }) => {

  const setIsGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const delContacted = async (id) => {

    try {
      setError(null);
      setIsGlobalLoading(true);
      const deletedUser = await axios.delete(`${process.env.REACT_APP_BACKEND_SERV}/api/deletecontacted`, { data: { _id: id } });

      if (deletedUser) {
        setIsDelPopupShowing(false);
        dispatch(loadAllPeopleContactedApi());
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
    <PeopleContacted.DeleteContainer>

      <PeopleContacted.Delete>

        <PeopleContacted.DeleteContent>


          <PeopleContacted.DeleteText>
            Are you sure you want to delete?
          </PeopleContacted.DeleteText>

          <PeopleContacted.DeleteErrorText>
            {error}
          </PeopleContacted.DeleteErrorText>



          <PeopleContacted.DeleteButtonContainer>
            <PeopleContacted.DeleteButton color={'#2243ae'} onClick={() => { setIsDelPopupShowing(false); setDelUserObjId(null); }}>Cancel</PeopleContacted.DeleteButton>
            <PeopleContacted.DeleteButton color={'#DC0000'} onClick={() => delContacted(delUserObjId)}>Delete</PeopleContacted.DeleteButton>
          </PeopleContacted.DeleteButtonContainer>



        </PeopleContacted.DeleteContent>



      </PeopleContacted.Delete>

    </PeopleContacted.DeleteContainer >
  )
}

export default PeopleContactedDeletePopup;