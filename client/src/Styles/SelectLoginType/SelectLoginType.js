import styled from "styled-components";

export const Section = styled.div`
  background-color: #142e84;
  color: #fff;
  min-height: 65rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-family: 'oswal',sans-serif;
  font-size: 6rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  column-gap: 2rem;
  padding: 20rem 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #162b6f;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  filter: brightness(130%);
  padding: 1rem 2rem;
  border: 2px solid #142e84;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  /* padding: 7rem; */
  width: 20rem;
  height: 20rem;
  transition: all .1s;

  &:hover{
    filter: brightness(150%);
  }
`;