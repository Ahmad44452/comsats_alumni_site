import * as StyledFooter from '../../Styles/Footer.Styled';

const Footer = () => {
  return (
    <StyledFooter.StyledFooter>
      <StyledFooter.StyledFooterMail href='mailto:info@cuisahiwal.edu.pk'>
        info@cuisahiwal.edu.pk
      </StyledFooter.StyledFooterMail>
      <StyledFooter.StyledFooterCopyright>
        ©2022 by COMSATS Aluminia
      </StyledFooter.StyledFooterCopyright>
    </StyledFooter.StyledFooter>
  )
}

export default Footer;