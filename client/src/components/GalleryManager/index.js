import { useState, useEffect } from 'react';
import * as Styled from '../../Styles/GalleryManager/GalleryManager.styled';

import AddImagePopUp from './AddImagePopUp';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllImagessApi } from '../../store/api/imgApi';
import useLoading from '../../hooks/useLoading';

import ImageSet from './ImageSet';

const GalleryManager = () => {

  const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const imgSlice = useSelector(state => state.imgSlice);
  const dispatch = useDispatch();
  const setGlobalLoading = useLoading();


  useEffect(() => {
    if (imgSlice && imgSlice.allImages === null) {
      setGlobalLoading(true);
      dispatch(loadAllImagessApi()).then(() => setGlobalLoading(false))
    }
  }, [dispatch, imgSlice]);

  return (
    <Styled.Section>

      {
        isAddPopupShowing ? <AddImagePopUp setIsAddPopupShowing={setIsAddPopupShowing} /> : null
      }

      <Styled.Header>
        <Styled.Heading>Manage Gallery</Styled.Heading>
        <Styled.HeaderButton onClick={() => setIsAddPopupShowing(true)}>Add Image</Styled.HeaderButton>
      </Styled.Header>

      <Styled.ImagesContainer>
        {
          imgSlice && imgSlice.allImages && (imgSlice.allImages.map((item, i) => (<ImageSet key={i} item={item} />)))
        }
      </Styled.ImagesContainer>


    </Styled.Section>
  )
}

export default GalleryManager;