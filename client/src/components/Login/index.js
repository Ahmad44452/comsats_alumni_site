import { useState } from 'react';
import * as LoginStyled from '../../Styles/Login.styled';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';

import { setDataAdmin } from '../../store/slices/adminSlice';
import { setDataAlumni } from '../../store/slices/alumniSlice';
import { useDispatch } from 'react-redux';

const Login = ({ loginType }) => {

  // const [loginType, setLoginType] = useState('Alumni');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const setGlobalLoading = useLoading();

  const [cnic, setCnic] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setGlobalLoading(true);

      if (loginType === 'AlumniSignup') {
        if (password !== confirmPassword) {
          setError("Both passwords should be same");
          setGlobalLoading(false);
          return;
        }
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/alumnisignup`, { registrationNumber: email, password, cnic });
        dispatch(setDataAlumni(res.data));
      }
      else if (loginType === 'AlumniLogin') {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/alumnilogin`, { registrationNumber: email, password });
        dispatch(setDataAlumni(res.data));
      } else {

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/adminlogin`, { email, password, loginType: loginType });
        dispatch(setDataAdmin(res.data));
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
        {
          loginType === "AlumniLogin" ? (<h2>Alumni Login</h2>) : (
            loginType === "AlumniSignup" ? <h2>Alumni Sign Up</h2> : <h2>{loginType} Login</h2>
          )
        }

        {/* {
          loginType === "AlumniSignup" && <h2>Alumni SignUp</h2>
        }
        <h2>{loginType} Login</h2> */}
        <form onSubmit={handleSubmit}>
          {

            loginType === 'AlumniSignup' ? <>
              <LoginStyled.LoginStyledInput type="text" placeholder="Registration Number" required onChange={(e) => setEmail(e.currentTarget.value)} />
              <LoginStyled.LoginStyledInput type="text" placeholder="CNIC Number (without hyphens)" minLength={13} maxLength={13} required onChange={(e) => setCnic(e.currentTarget.value)} />
              <LoginStyled.LoginStyledInput type="password" placeholder="Password" required onChange={(e) => setPassword(e.currentTarget.value)} />
              <LoginStyled.LoginStyledInput type="password" placeholder="Confirm Password" required onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
            </> : (
              <>
                <LoginStyled.LoginStyledInput type={loginType === 'AlumniLogin' ? "text" : "email"} placeholder={loginType === 'AlumniLogin' ? "Registration Number" : "Email"} required onChange={(e) => setEmail(e.currentTarget.value)} />
                <LoginStyled.LoginStyledInput type={"password"} placeholder="Password" required onChange={(e) => setPassword(e.currentTarget.value)} />
              </>
            )
          }



          <div style={{ fontSize: '1.5rem', color: 'red' }} >{error}</div>
          <LoginStyled.LoginStyledSubmitButton type="submit">
            {
              loginType === "AlumniSignup" ? "Sign Up" : "Login"
            }
          </LoginStyled.LoginStyledSubmitButton>
          {
            loginType === "AlumniLogin" ? <LoginStyled.ForgotPassword to='/forgotpassword'>Forgot password?</LoginStyled.ForgotPassword> : null
          }
        </form>

        {/* <LoginStyled.LoginStyledOptionButtons>
          <button>Alumni SignUp</button>
          {
            loginType === 'Alumni' ? null : <button onClick={() => setLoginType('Alumni')}>Alumni Login</button>
          }

          {
            loginType === 'Developer' ? null : <button onClick={() => setLoginType('Developer')}>Developer Login</button>
          }

          {
            loginType === 'Admin' ? null : <button onClick={() => setLoginType('Admin')}>Admin Login</button>
          }

          {
            loginType === 'HOD' ? null : <button onClick={() => setLoginType('HOD')}>HOD Login</button>
          }
        </LoginStyled.LoginStyledOptionButtons> */}
        {/* <p onClick={() => setIsAdminLogin(prev => !prev)} >Want to login as {isAdminLogin ? 'alumni' : 'admin'}? Click here</p> */}

      </LoginStyled.LoginStyledContainer>

    </LoginStyled.LoginStyled>
  )
}

export default Login;