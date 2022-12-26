import { useState } from 'react';
import * as LoginStyled from '../../Styles/Login.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';

import { setDataAdmin } from '../../store/slices/adminSlice';
import { setDataAlumni } from '../../store/slices/alumniSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const setGlobalLoading = useLoading();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);

      setGlobalLoading(true);

      if (isAdminLogin) {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/adminlogin`, { email, password });
        dispatch(setDataAdmin(res.data));
      } else {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/alumnilogin`, { registrationNumber: email, password });
        dispatch(setDataAlumni(res.data));
      }


      setGlobalLoading(false);
    } catch (err) {

      setGlobalLoading(false);
      if (err.response)
        setError(err.response.data.message);
      else
        setError('Could not reach server!');
    }

  }

  return (
    <LoginStyled.LoginStyled>

      <LoginStyled.LoginStyledContainer >

        <LoginStyled.LoginStyledComsatsLogo src='./images/COMSATS-LOGO.png' />
        <h2>{isAdminLogin ? 'Admin' : 'Alumni'} Login</h2>
        <form onSubmit={handleSubmit}>
          <LoginStyled.LoginStyledInput type={isAdminLogin ? "email" : "text"} placeholder={isAdminLogin ? "Email" : "Registration Number"} required onChange={(e) => setEmail(e.currentTarget.value)} />
          <LoginStyled.LoginStyledInput type={"password"} placeholder="Password" required onChange={(e) => setPassword(e.currentTarget.value)} />

          <div style={{ fontSize: '1.5rem', color: 'red' }} >{error}</div>
          <LoginStyled.LoginStyledSubmitButton type="submit">
            Login
          </LoginStyled.LoginStyledSubmitButton>
        </form>

        <p onClick={() => setIsAdminLogin(prev => !prev)} >Want to login as {isAdminLogin ? 'alumni' : 'admin'}? Click here</p>

      </LoginStyled.LoginStyledContainer>

    </LoginStyled.LoginStyled>
  )
}

export default Login;