import styled from "styled-components";

export const StyledContact = styled.div`
  background-color: #142e84;
  min-height: 100vh;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2{
    font-family: 'oswal',sans-serif;
    font-size: 6rem;
    text-align: center;
  }
`;

export const StyledContactInputContainer = styled.div`
  margin-top: 8rem;
`;

export const StyledContactInputGroup = styled.div`
  margin-bottom: 3rem;
  label{
    display: block;
    font-size: 1.8rem;
    margin-bottom: .5rem;
  }

  textarea{
    resize: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    width: 55rem;
    font-family: 'Arial',sans-serif;

    &,&:focus{
      outline: none;
      color: #fff;
    }

    &:hover,&:focus{
      border: 1px solid #fff;
    }

    &::placeholder{
      color: #fff;
      font-family: 'Arial',sans-serif;
    }
  }
`;

export const StyledContactInputText = styled.input`
  
  &,&:focus{
    outline: none;
    border: none;
    color: #fff;
  }

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff !important;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  width: 55rem;
  
  

  &:hover,&:focus{
    border: 1px solid #fff;
  }

  &::placeholder{
    color: #fff;
  }

`;

export const StyledContactInputSubmit = styled.input`
  margin-top: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  transition: all .3s;

  &:hover{
    color: #142e84;
    background-color: #fff;
  }
`;

export const StyledContactError = styled.p`
  text-align: center;
  font-size: 2rem;
  color: red;
`;

export const StyledContactSuccess = styled.p`
  text-align: center;
  font-size: 2rem;
  color: green;
`;