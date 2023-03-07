import styled from 'styled-components';

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


export const Close = styled.div`
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