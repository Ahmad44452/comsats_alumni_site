import styled from "styled-components";


export const AddContainer = styled.div`
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

export const Add = styled.div`
  
`;

export const AddContent = styled.div`
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

export const AddHeading = styled.h2`
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

export const AddTextInput = styled.input`

  &,&:focus{
    border: none;
    outline: none;
    color: #000;
  }


  background-color: transparent;
  border: 1px solid #000 !important;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  width: 55rem;
  display: block;

  &:not(:last-child){
    margin-bottom: 1rem;
  }
  
  
  

  &:hover,&:focus{
    border: 1px solid #000;
  }

  &::placeholder{
    color: #000;
  }

`;

export const AddGenerate = styled.div`
  text-align: right;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover{
    text-decoration: underline;
  }
`;

export const AddSubmitInput = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: #142e84;
  background-color: transparent;
  border: 1px solid #142e84;
  transition: all .3s;

  &:hover{
    color: #fff;
    background-color: #142e84;
  }
`;

export const AddError = styled.p`
  text-align: center;
  color: red;
  margin: 2rem 0;
  font-size: 1.5rem;
`;

export const AddSuccess = styled.p`
  text-align: center;
  color: green;
  margin: 2rem 0;
  font-size: 1.5rem;
`;