import styled from "styled-components";


export const SubmittedDetailsShowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  height: 100vh;
  width: 100vw;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmittedDetailsAdd = styled.div`
  
`;

export const SubmittedDetailsShowContent = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 3px;
  padding: 3rem 2rem;
`;


export const SubmittedDetailsShowClose = styled.div`
  position: absolute;
  right: 2px;
  top: 0;

  svg{
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:hover{

      path{
        stroke: red;
      }
      
    }
  }
`;

export const SubmittedDetailsShowHeading = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  position: relative;
  padding: 1rem 0;
  text-align: center;
  margin-bottom: 2rem;

  &::before{
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: 1px;
    background-color: #000;
  }
`;

export const SubmittedDetailsShowInfoContainer = styled.div`

`;

export const SubmittedDetailsShowInfoGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  width: 50rem;
`;

export const SubmittedDetailsShowInfoLabel = styled.p`
  font-family: 'oswald',sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
`;

export const SubmittedDetailsShowInfoText = styled.p`
  margin-left: 1.5rem;
`;