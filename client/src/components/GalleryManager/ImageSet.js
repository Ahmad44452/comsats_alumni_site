import * as Styled from '../../Styles/GalleryManager/ImageSet.styled';

import 'react-lazy-load-image-component/src/effects/blur.css';


import ImageSetDelete from './ImageSetDelete';
import { useState } from 'react';

const ImageSet = ({ item }) => {

  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);

  return (
    <>
      <Styled.ImageSetContainer>
        <Styled.ImageSetHeader>
          <Styled.ImageSetHeading>{item.heading}</Styled.ImageSetHeading>
          <Styled.ImageSetDelete onClick={() => setIsDelPopupShowing(true)}>Delete</Styled.ImageSetDelete>
        </Styled.ImageSetHeader>

        <Styled.ImageSetImagesContainer>
          {
            item.urls.map((img, i) => <Styled.ImageSetSingle key={i} src={img} placeholderSrc='./images/imageplaceholder.png' effect='blur' />)
          }
        </Styled.ImageSetImagesContainer>
      </Styled.ImageSetContainer>
      {
        isDelPopupShowing ? <ImageSetDelete _id={item._id} setIsDelPopupShowing={setIsDelPopupShowing} /> : null
      }
    </>
  )
}

export default ImageSet;