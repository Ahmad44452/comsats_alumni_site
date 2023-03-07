import * as Styled from '../../Styles/Gallery/Gallery.styled';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Navbar from "../navbar";
import Footer from '../Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLoading from '../../hooks/useLoading';
import { loadAllImagessApi } from '../../store/api/imgApi';

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
                item.urls.map((img, i) => <Styled.ImageSetSingle key={i} src={img} />)
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