import styled from 'styled-components';

export const StyledAdminPanelChangePass = styled.div`
  min-height: 100vh;
  background-color: #142e84;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledAminPanelChangePassContainer = styled.div`
  text-align: center;
`;


export const StyledAdminPanelChangePassHeading = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: 600;
  font: 'oswald',sans-serif;
  margin-bottom: 5rem;
`;

export const StyledAdminPanelInputGroup = styled.div`
  margin-bottom: 3rem;

  label{
    display: block;
    font-size: 1.8rem;
    margin-bottom: .5rem;
    text-align: left;
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

export const StyledAdminPanelInputText = styled.input`
  
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
    color: rgba(255,255,255,.6);
  }

  &:disabled{
    opacity: .3;

    &:hover{
      border-bottom: 1px solid #fff !important;
    }
  }

`;

export const StyledAdminPanelInputSubmit = styled.input`
  margin-top: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 115rem;
  padding: 1rem;
  font-size: 2rem;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  margin-bottom: 3rem;
  transition: all .3s;

  &:hover{
    color: #142e84;
    background-color: #fff;
  }
`;

export const StyledAdminPanelChangePassError = styled.p`
  color: #E0144C;
  font-size: 1.5rem;
`;



export const StyledAdminPanel = styled.div`
  min-height: 100vh;
  background-color: #142e84;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAlumniHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 13rem;
  margin-bottom: 5rem;
`;

export const StyledAlumniPanelHeaderButton = styled.button`
  background-color: #142e84;
  text-align: center;
  border: 1px solid #fff;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #fff;
  transition: all .3s;

  &:hover{
    background-color: #fff;
    color: #142e84;
  }
`;


export const StyledAdminPanelHeading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 600;
  font: 'oswald',sans-serif;
`;

export const StyledAdminPanelInputGroupContainer = styled.div`
  display: ${({ isEmployed }) => isEmployed === false ? 'none' : 'flex'};
  flex-wrap: wrap;

  div:first-child{
    margin-right: 5rem;
  }
`;

export const StyledAdminPanelError = styled.p`
  text-align: center;
  color: #E0144C;
  font-size: 2rem;
`;

export const StyledAdminPanelSuccess = styled.p`
  text-align: center;
  color: green;
  font-size: 2rem;
`;

export const StyledAlumniDropbox = styled.div`
  width: ${({ width }) => width || '55rem'};
  position: relative;
`;

export const StyledAlumniDropboxContent = styled.div`
  border-bottom: 1px solid #fff;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  cursor: pointer;

  span{
    cursor: pointer;
    line-height: 0;
    
    svg{
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const StyledAlumniDropboxOptions = styled.div`
  font-size: 1.8rem;
  border: 1px solid #fff;
  border-top: none;
  max-height: 28rem;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #142e84;
  z-index: 50;

  ul{
    list-style: none;
    
    li{
      padding: 1rem 2rem;

      &:hover{
        background: #0c1c51;
        cursor: pointer;
      }
    }
  }
`;