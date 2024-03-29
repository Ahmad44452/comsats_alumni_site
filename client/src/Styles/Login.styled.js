import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LoginStyled = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #142e84;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginStyledContainer = styled.div`
  background-color: auto;
  border-radius: 5px;
  padding: 4rem 3rem 3rem 3rem;
  text-align: center;
  background-color: #162b6f;

  h2{
    font-family: 'oswald',sans-serif;
    font-size: 3rem;
    margin: 3rem 0;
  }

  p{
    margin-top: 2.5rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover{
      text-decoration: underline;
    }
  }
`;

export const LoginStyledComsatsLogo = styled.img`
  width: 14rem;
  display: block;
  margin: 0 auto;
  background-color: #fff;
`;


export const LoginStyledInput = styled.input`
  display: block;
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
  padding: 1.2rem;
  border-radius: 2px;
  width: 45rem;

  &::placeholder{
    color: ${({ color }) => color || 'auto'};
  }
  
  &,&:focus{
    border: none;
    outline: none;
  }

`;


export const LoginStyledSubmitButton = styled.button`
  text-align: center;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s;
  margin: 2rem 0 0 0;
  padding: 1rem 4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1.7rem;
  background-color: #fff;

  &:hover{
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgb(233 0 63 / 10%);
  }

  &:active{
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgb(233 0 63 / 10%);
  }
`;

export const LoginStyledOptionButtons = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 3.5rem;
  button{
    background-color: #162b6f;
    color: #fff;
    filter: brightness(130%);
    padding: 1rem 2rem;
    border: 2px solid #142e84;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all .1s;

    &:hover{
      filter: brightness(150%);
    }
  }
`;

export const ForgotPassword = styled(Link)`
  font-size: 1.8rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin-top: 2rem;
  color: #fff;;

  &:hover{
    text-decoration: underline;
  }
  
`

