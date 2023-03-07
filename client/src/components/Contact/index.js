import { useRef, useState } from 'react';
import * as StyledContact from '../../Styles/Contact.styled';
import useLoading from '../../hooks/useLoading';
import axios from 'axios';
import Navbar from '../navbar';
import Footer from '../Footer';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const setGlobalLoading = useLoading();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setGlobalLoading(true);
      setError(null);
      setSuccess(null);


      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/submitcontactus`, { name, email, address, subject, message });



      setSuccess('Your message has been recieved. Thank you!');
      nameRef.current.value = '';
      emailRef.current.value = '';
      addressRef.current.value = '';
      subjectRef.current.value = '';
      messageRef.current.value = '';
      setGlobalLoading(false);

    } catch (err) {

      setGlobalLoading(false);
      setSuccess(null);
      if (err.response)
        setError(err.response.data.message);
      else
        setError('Could not reach server!');
    }
  }

  return (
    <>
      <Navbar />
      <StyledContact.StyledContact>
        <h2>Contact Us</h2>

        <StyledContact.StyledContactInputContainer>
          <form onSubmit={handleSubmit}>
            <StyledContact.StyledContactInputGroup>
              <label>Name</label>
              <StyledContact.StyledContactInputText ref={nameRef} type={'text'} required placeholder='Enter your name' onChange={e => setName(e.currentTarget.value)} />
            </StyledContact.StyledContactInputGroup>

            <StyledContact.StyledContactInputGroup>
              <label>Email</label>
              <StyledContact.StyledContactInputText ref={emailRef} type={'email'} required placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
            </StyledContact.StyledContactInputGroup>

            <StyledContact.StyledContactInputGroup>
              <label>Address</label>
              <StyledContact.StyledContactInputText ref={addressRef} type={'address'} required placeholder='Enter your address' onChange={e => setAddress(e.currentTarget.value)} />
            </StyledContact.StyledContactInputGroup>

            <StyledContact.StyledContactInputGroup>
              <label>Subject</label>
              <StyledContact.StyledContactInputText ref={subjectRef} type={'text'} required placeholder='Enter the subject' onChange={e => setSubject(e.currentTarget.value)} />
            </StyledContact.StyledContactInputGroup>

            <StyledContact.StyledContactInputGroup>
              <label>Message</label>
              <textarea placeholder='Type your message here' rows="4" cols="50" ref={messageRef} onChange={e => setMessage(e.currentTarget.value)} />
            </StyledContact.StyledContactInputGroup>

            <StyledContact.StyledContactError>
              {error}
            </StyledContact.StyledContactError>

            <StyledContact.StyledContactSuccess>
              {success}
            </StyledContact.StyledContactSuccess>


            <StyledContact.StyledContactInputSubmit type='submit' value={'SUBMIT'} />
          </form>
        </StyledContact.StyledContactInputContainer>

      </StyledContact.StyledContact>
      <Footer />
    </>
  )
}

export default Contact;