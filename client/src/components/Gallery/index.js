import * as Styled from '../../Styles/Gallery/Gallery.styled';
import Navbar from "../navbar";
import Footer from '../Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLoading from '../../hooks/useLoading';
import { loadAllImagessApi } from '../../store/api/imgApi';

import 'react-lazy-load-image-component/src/effects/blur.css';


const Gallery = () => {

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
    <>
      <Navbar />
      <Styled.Container>
        <Styled.Heading>Gallery</Styled.Heading>
        {imgSlice && imgSlice.allImages && (imgSlice.allImages.map((item) => (
          <Styled.ImageSetContainer key={item._id}>
            <Styled.ImageSetHeader>
              <Styled.ImageSetHeading>{item.heading}</Styled.ImageSetHeading>
            </Styled.ImageSetHeader>

            <Styled.ImageSetImagesContainer>
              {
                item.urls.map((img, i) => (
                  <Styled.ImageSetSingle
                    alt={`${item.heading} 1`}
                    key={i}
                    src={img}
                    placeholderSrc='./images/imageplaceholder.png'
                    effect='blur'
                  />
                ))
              }
            </Styled.ImageSetImagesContainer>
          </Styled.ImageSetContainer>
        )))}
      </Styled.Container>
      <Footer />
    </>
  )
}

export default Gallery;