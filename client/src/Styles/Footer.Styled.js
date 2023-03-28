import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #162b6f;
  color: #fff;
  border-top: 1px solid #000;
  padding: 5rem 0;
  text-align: center;
`;

export const StyledFooterMail = styled.a`
  &:link,&:visited{
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  &:hover{
    text-decoration: underline;
  }
`;


export const StyledFooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  
`;

export const StyledFooterReachus = styled.div`

  h2{
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p{
    font-size: 1.5rem;
  }



`;

export const StyledFooterContactUs = styled.div`
h2{
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

export const StyledFooterNumber = styled.p`
font-size: 1.5rem;
`;

export const StyledFooterSocials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;

  a{
    
    padding: 1.5rem;
    border-radius: 100%;
    cursor: pointer;
    

    svg{
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const StyledFooterSocialsTwitter = styled.a`
background-color: #03aaee;
`;

export const StyledFooterSocialsFacebook = styled.a`
background-color: #1876f1;
`;

export const StyledFooterSocialsGoogle = styled.a`
background-color:#c64b3a;
`;

export const StyledFooterSocialsShare = styled.a`
background-color:#93ce38;
`;