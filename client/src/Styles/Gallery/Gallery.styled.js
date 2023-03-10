import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.div`
  background-color: #142e84;
  color: #fff;
  min-height: 100vh;
  padding: 2rem;
`

export const Heading = styled.h2`
  font-family: 'oswal',sans-serif;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ImageSetContainer = styled.div`
margin-bottom: 2rem;
`;

export const ImageSetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const ImageSetHeading = styled.h2`
  font-family: 'oswal',sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ImageSetImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1rem;
`;

export const ImageSetSingle = styled(LazyLoadImage)`
  width: 100%;
`;