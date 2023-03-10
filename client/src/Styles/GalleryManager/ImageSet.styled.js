import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
  font-size: 2rem;
`;

export const ImageSetDelete = styled.button`
  background-color: transparent;
  border: 1px solid #DF2E38;
  color: #DF2E38;
  cursor: pointer;
  padding: 1rem 2rem;
  text-transform: uppercase;

  &:hover{
    background-color: #DF2E38;
    color: #fff;
  }
`;

export const ImageSetImagesContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  column-gap: 2rem; */
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1rem;
`;

export const ImageSetSingle = styled(LazyLoadImage)`
  width: 100%;
`;