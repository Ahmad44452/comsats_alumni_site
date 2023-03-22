import styled from "styled-components";

export const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: #142e84;
  color: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-family: 'oswal',sans-serif;
  font-size: 6rem;
  text-align: center;
  padding: 2rem 0;
  /* margin-bottom: 2rem; */
`;

export const FormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  transform: translateY(-25%);
`;

export const Label = styled.label`
  display: block;
  font-size: 2.5rem;
`;

export const Input = styled.input`
  display: inline-block;
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

export const Response = styled.p`
  color: ${props => props.color};
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  text-align: center;
  display: block;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s;
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