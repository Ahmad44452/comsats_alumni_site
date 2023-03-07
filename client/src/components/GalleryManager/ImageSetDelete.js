import * as Styled from '../../Styles/GalleryManager/DeleteImage.styled';
import useLoading from '../../hooks/useLoading';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loadAllImagessApi } from '../../store/api/imgApi';

const ImageSetDelete = ({ _id, setIsDelPopupShowing }) => {

  const setIsGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const delImage = async (id) => {

    try {
      setError(null);
      setIsGlobalLoading(true);
      const deletedUser = await axios.delete(`${process.env.REACT_APP_BACKEND_SERV}/img/delete`, { data: { _id: id } });

      if (deletedUser) {
        setIsDelPopupShowing(false);
        dispatch(loadAllImagessApi());
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
            <Styled.DeleteButton color={'#2243ae'} onClick={() => { setIsDelPopupShowing(false) }}>Cancel</Styled.DeleteButton>
            <Styled.DeleteButton color={'#DC0000'} onClick={() => delImage(_id)}>Delete</Styled.DeleteButton>
          </Styled.DeleteButtonContainer>



        </Styled.DeleteContent>



      </Styled.Delete>
    </Styled.DeleteContainer>
  )
}

export default ImageSetDelete;