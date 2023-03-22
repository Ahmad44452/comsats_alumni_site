import Navbar from '../navbar';
import Footer from '../Footer';
import axios from 'axios';
import * as Styled from '../../Styles/ForgotPassword.Styled';
import { useState } from 'react';
import useLoading from '../../hooks/useLoading';

const ForgotPassword = () => {

  const [regNo, setRegNo] = useState('');
  const setGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setGlobalLoading(true);
      setError(null);
      setSuccess(null);
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/sendresetpasswordmail`, { registrationNumber: regNo });

      setSuccess(res.data);
      setGlobalLoading(false);
    } catch (error) {
      setGlobalLoading(false);
      if (error.response)
        setError(error.response.data.message);
      else
        setError('Could not reach server!');
      console.log(error)
    }
  }

  return (
    <Styled.Section>
      <Navbar />
      <Styled.Container>
        <Styled.Heading>Reset Password</Styled.Heading>
        <Styled.FormContainer>
          <Styled.Form onSubmit={handleSubmit}>
            {/* <Styled.Label>Registration number:</Styled.Label> */}
            <Styled.Input placeholder='Enter registration number' onChange={e => setRegNo(e.target.value)} />
            <Styled.Button type='submit'>Send email</Styled.Button>
            {
              success && <Styled.Response color='green'>{success}</Styled.Response>
            }

            {
              error && <Styled.Response color='red'>{error}</Styled.Response>
            }


          </Styled.Form>
        </Styled.FormContainer>
      </Styled.Container>
      <Footer />
    </Styled.Section>
  )
}

export default ForgotPassword;