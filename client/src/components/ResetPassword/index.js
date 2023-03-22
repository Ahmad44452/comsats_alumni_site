import Navbar from '../navbar';
import Footer from '../Footer';
import axios from 'axios';
import * as Styled from '../../Styles/ResetPassword.styled';
import { useState } from 'react';
import useLoading from '../../hooks/useLoading';
import { useParams } from 'react-router-dom'

const ResetPassword = () => {

  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const setGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { id } = useParams();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setGlobalLoading(true);
      setError(null);
      setSuccess(null);

      if (confirmPass !== pass) {
        setError("Both passwords must be same");
        return;
      }

      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/resetpass`, { id: id, newPassword: pass });

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
        <Styled.Heading>Change Password</Styled.Heading>
        <Styled.FormContainer>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.InputGroup>
              <Styled.Input placeholder='New password' type='password' onChange={e => setPass(e.target.value)} />
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Styled.Input placeholder='Confirm password' type='password' onChange={e => setConfirmPass(e.target.value)} />
            </Styled.InputGroup>


            <Styled.Button type='submit'>Change password</Styled.Button>
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

export default ResetPassword;