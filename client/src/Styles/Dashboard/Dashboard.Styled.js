import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Navigation = styled.div`
  background: #1e1e1e;
  min-width: 26rem;
`;

export const NavigationButton = styled.div`
  cursor: pointer;
  padding: 1rem 5rem 1rem 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  &:hover{
    background-color: #fff;
    color: #1e1e1e
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  min-height: 100vh;
`;