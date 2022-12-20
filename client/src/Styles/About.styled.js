import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rem;
  background-image: linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.7)), url(${props => props.bgImgUrl});
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;

  div{
    width: 70rem;

    h2{
      font-family: 'oswald',sans-serif;
      font-size: 5rem;
      margin-bottom: 5rem;
    }

    p{
      font-size: 2rem;
      text-align: justify;
      text-align-last: center;
      line-height: 1.5;
    }
  }

  
`;