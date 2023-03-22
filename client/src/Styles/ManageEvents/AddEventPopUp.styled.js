import styled from "styled-components";


export const BlackScreen = styled.div`
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

export const Container = styled.div`
  
`;

export const Content = styled.div`
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

export const Heading = styled.h2`
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

export const TextInput = styled.input`

  &,&:focus{
    border: none;
    outline: none;
    color: #000;
  }


  background-color: transparent;
  border: 1px solid #000 !important;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  width: 100%;
  display: block;

  &:not(:last-child){
    margin-bottom: 1rem;
  }
  
  
  

  &:hover,&:focus{
    border: 1px solid #000;
  }

  &::placeholder{
    color: rgba(0,0,0,.4);
  }

`;

export const TextArea = styled.textarea`

  &,&:focus{
    border: none;
    outline: none;
    color: #000;
  }
  
  resize: vertical;
  font-family: 'Arial',sans-serif;
  background-color: transparent;
  border: 1px solid #000 !important;
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1rem 2rem;
  width: 100%;
  display: block;
  margin-bottom: 1rem;

  &:hover,&:focus{
    border: 1px solid #000;
  }

  &::placeholder{
    color: rgba(0,0,0,.4);
  }
`

export const Generate = styled.div`
  text-align: right;
  cursor: pointer;
  font-size: 1.3rem;

  &:hover{
    text-decoration: underline;
  }
`;

export const ChooseFileButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChooseFileButton = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #142e84;
  color: #fff;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const FileName = styled.span`
  display: inline-block;
  margin: auto 0;
  color: #000;
  margin-left: 1rem;
  font-size: 1.3rem;
`;

export const IncreaseImageAmount = styled.div`
  border: 1px solid #142e84;
  border-radius: 100%;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;

  svg{
    width: 100%;
    height: 100%;
    line-height: 1;
    color: #142e84;
  }

  &:hover{
    background-color: #142e84;

    svg{
      color: #fff;
    }
  }

  
`;

export const SubmitInput = styled.input`
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

export const Error = styled.p`
  text-align: center;
  color: red;
  margin: 2rem 0;
  font-size: 1.5rem;
`;

export const Success = styled.p`
  text-align: center;
  color: green;
  margin: 2rem 0;
  font-size: 1.5rem;
`;