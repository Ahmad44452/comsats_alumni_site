import * as StyledFooter from '../../Styles/Footer.Styled';
import { TfiGoogle } from 'react-icons/tfi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsShareFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <StyledFooter.StyledFooter>
      <StyledFooter.StyledFooterGrid>
        <StyledFooter.StyledFooterReachus>
          <h2>Reach Us At</h2>
          <p>COMSATS Road, Off GT Road<br />Sahiwal,Punjab<br />Pakistan</p>
        </StyledFooter.StyledFooterReachus>

        <StyledFooter.StyledFooterContactUs>
          <h2>Contact Us</h2>
          <StyledFooter.StyledFooterNumber>
            Tel: +92-040-4305001-4305002
          </StyledFooter.StyledFooterNumber>
          <StyledFooter.StyledFooterNumber>
            Fax: +92-040-4305006
          </StyledFooter.StyledFooterNumber>
          <StyledFooter.StyledFooterMail href='mailto:info@cuisahiwal.edu.pk'>
            info@cuisahiwal.edu.pk
          </StyledFooter.StyledFooterMail>
        </StyledFooter.StyledFooterContactUs>
      </StyledFooter.StyledFooterGrid>


      <StyledFooter.StyledFooterSocials>
        <StyledFooter.StyledFooterSocialsTwitter>
          <AiOutlineTwitter />
        </StyledFooter.StyledFooterSocialsTwitter>

        <StyledFooter.StyledFooterSocialsFacebook>
          <FaFacebookF />
        </StyledFooter.StyledFooterSocialsFacebook>

        <StyledFooter.StyledFooterSocialsGoogle>
          <TfiGoogle />
        </StyledFooter.StyledFooterSocialsGoogle>

        <StyledFooter.StyledFooterSocialsShare>
          <BsShareFill />
        </StyledFooter.StyledFooterSocialsShare>
      </StyledFooter.StyledFooterSocials>


    </StyledFooter.StyledFooter>
  )
}

export default Footer;