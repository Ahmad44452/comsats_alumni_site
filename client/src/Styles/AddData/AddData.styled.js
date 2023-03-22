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

export const ChooseFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ChooseFile = styled.label`
  /* width: 100%; */
  border: 1px dashed rgb(151, 190, 244);
  text-align: center;
  background-color: #f6f8fb;
  padding: 10rem 15rem;
  border-radius: 20px;
  cursor: pointer;
`;

export const ChooseFileText = styled.p`
color: rgb(189, 189, 189);
font-size: 2rem;
letter-spacing: -1px;
`;

export const ChooseFileImg = styled.div`
  

  svg{
    color: #828282;
    width: 10rem;
    height: 10rem;
  }
`;

export const UploadButtonContainer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

export const UploadButtonFilename = styled.div`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const UploadButton = styled.button`
  display: inline-block;
  text-align: center;
  border: 1px solid #162b6f;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-decoration: none;
  background-color: transparent;
  transition: all .3s;

  &:link,&:visited{
    color: #162b6f;
  }

  &:hover{
    background-color: #162b6f;
    color: #fff;
  }
`;

export const Message = styled.p`
  color: ${props => props.color};
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
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