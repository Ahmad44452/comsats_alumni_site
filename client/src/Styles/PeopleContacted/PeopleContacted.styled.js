import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  padding: 0 3rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-family: 'oswald',sans-serif;
  font-weight: 600;
  color: #142e84;
  padding: 2rem 0 1rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;

  td, th {
    padding: 8px;
    text-align: center;
  }

  tbody tr{
    font-size: 1.8rem;
    border-bottom: 1px solid #B2B2B2;
    color: #3C4048;
  }

  tbody a{
    &:link,&:visited{
      text-decoration: none;
      color: blue;
    }
  }

  th {
    padding-top: .5rem;
    padding-bottom: 0rem;
    color: #B2B2B2;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`;

export const TableSvg = styled.div`
  display: inline-block;
  &:not(:last-child){
    margin-right: 2rem;
  }
  
  svg{
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;

    &:hover{
      color: ${({ hoverColor }) => hoverColor};
    }
  }
`;

export const SubmittedDetailsAddButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  border: none;
  outline: none;
  background-color: #2243ae;
  padding: 1rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  svg{
    width: 3.5rem;
    height: 3.5rem;
    path{
      stroke: #fff !important;
    }
  }
`;

export const DeleteContainer = styled.div`
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

export const Delete = styled.div`
  
`;

export const DeleteContent = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 3px;
  padding: 3rem 7rem;
`;



export const DeleteText = styled.div`
  font-size: 2rem;
  /* margin: 1rem 0 4rem 0; */
`;

export const DeleteErrorText = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 0;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
`;

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  flex-grow: 1;
  padding: 1rem 0;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ color }) => color};
  border: ${({ color }) => `1px solid ${color};`};
  text-transform: uppercase;
  border-radius: 5px;

  &:hover{
    background-color:  ${({ color }) => color};
    color: #fff;
  }

  &:not(:last-child){
    margin-right: 10px;
  }
`;