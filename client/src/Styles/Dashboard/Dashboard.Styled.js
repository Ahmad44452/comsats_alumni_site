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

export const Divider = styled.div`
  width: 100%;
  height: 4px;
  position: relative;
  margin: .7rem 0;

  &::after{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    opacity: 0.7;
    height: 2px;
    background-color: #fff;
  }

`;