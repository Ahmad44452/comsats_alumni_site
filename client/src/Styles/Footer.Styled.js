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
    font-size: 2rem;
  }

  &:hover{
    text-decoration: underline;
  }
`;

export const StyledFooterCopyright = styled.div`
  font-size: 2rem;
  margin-top: 4rem;
`;