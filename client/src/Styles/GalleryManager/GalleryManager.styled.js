import styled from "styled-components";

export const Section = styled.div`
  min-height: 100vh;
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

export const HeaderButton = styled.button`
  background-color: #fff;
  text-align: center;
  border: 1px solid #142e84;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #142e84;
  transition: all .3s;

  &:hover{
    background-color: #162b6f;
    color: #fff;
  }
`;

export const ImagesContainer = styled.div`
  padding-bottom: 5rem;
`;