import * as StyledContact from '../../Styles/Contact.styled';

const Contact = () => {
  return (
    <StyledContact.StyledContact>
      <h2>Contact Us</h2>

      <StyledContact.StyledContactInputContainer>

        <StyledContact.StyledContactInputGroup>
          <label>Name</label>
          <StyledContact.StyledContactInputText type={'text'} required placeholder='Enter your name' />
        </StyledContact.StyledContactInputGroup>

        <StyledContact.StyledContactInputGroup>
          <label>Email</label>
          <StyledContact.StyledContactInputText type={'email'} required placeholder='Enter your email' />
        </StyledContact.StyledContactInputGroup>

        <StyledContact.StyledContactInputGroup>
          <label>Address</label>
          <StyledContact.StyledContactInputText type={'address'} required placeholder='Enter your address' />
        </StyledContact.StyledContactInputGroup>

        <StyledContact.StyledContactInputGroup>
          <label>Subject</label>
          <StyledContact.StyledContactInputText type={'text'} required placeholder='Enter the subject' />
        </StyledContact.StyledContactInputGroup>

        <StyledContact.StyledContactInputGroup>
          <label>Message</label>
          <textarea placeholder='Type your message here' rows="4" cols="50" />
        </StyledContact.StyledContactInputGroup>

        <StyledContact.StyledContactInputSubmit type='submit' value={'SUBMIT'} />

      </StyledContact.StyledContactInputContainer>

    </StyledContact.StyledContact>
  )
}

export default Contact;