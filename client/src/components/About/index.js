import * as StyledAbout from '../../Styles/About.styled';

const About = () => {
  return (
    <>
      <StyledAbout.StyledAboutContainer
        bgImgUrl={'https://static.wixstatic.com/media/0ba375d130f247e1afe4ab96341919f7.jpg/v1/fill/w_1245,h_720,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/0ba375d130f247e1afe4ab96341919f7.jpg'}
      >
        <div>
          <h2>About Us</h2>
          <p>
            At COMSATS Aluminia, you’ll find the creative and comfortable learning atmosphere you have been hoping for. Located in San Francisco, our Birth School has been
            shaping minds and refining skills since 2000. We are privileged to teach students from around the world, offering them a unique curriculum that will prepare them
            for their careers.
            Our commitment to excellence and our state-of-the-art facilities make studying at COMSATS Aluminia a rewarding experience, one that will last many years after graduation. Contact us to schedule a visit or talk to one of our proud alumni.
          </p>
        </div>
      </StyledAbout.StyledAboutContainer>

      <StyledAbout.StyledAboutContainer
        bgImgUrl={'https://static.wixstatic.com/media/f2bb59155bbde1c6ba4a4c97f168bede.png/v1/fill/w_1068,h_566,fp_0.50_0.50,q_90,enc_auto/f2bb59155bbde1c6ba4a4c97f168bede.png'}
      >
        <div>
          <h2>Our Mission</h2>
          <p>
            Our primary purpose is provide students with a foundational understanding of a broad range of disciplines, while creating an educational atmosphere that students
            will love being around. Our programs are intended to empower students to tackle challenges and take on experiences that may be new to them. We encourage our
            students to pursue their dreams and pave the way for successful, inspiring careers. Reach out today if you want to learn more.
          </p>
        </div>
      </StyledAbout.StyledAboutContainer>

      <StyledAbout.StyledAboutContainer
        bgImgUrl={'https://static.wixstatic.com/media/dcca985fe5e148b1aea6744afd6af686.jpg/v1/fill/w_1245,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/dcca985fe5e148b1aea6744afd6af686.jpg'}
      >
        <div>
          <h2>Our Values</h2>
          <p>
            With years of experience as educators, we know just what it takes to engage students and prepare them for adult life. Our unique teaching approach makes our students
            feel valued, respected and appreciated. At COMSATS Aluminia, we believe in fostering a creative and collaborative experience to help our students reach their full
            potential and pursue their dreams. Contact us to learn what we can do for you.
          </p>
        </div>
      </StyledAbout.StyledAboutContainer>
    </>
  )
}

export default About;