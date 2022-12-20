import { useState } from 'react';
import * as LoginStyled from '../../Styles/Login.styled';


const Login = () => {

  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
  }

  return (
    <LoginStyled.LoginStyled>

      <LoginStyled.LoginStyledContainer >

        <LoginStyled.LoginStyledComsatsLogo src='./images/COMSATS-LOGO.png' />
        <h2>{isAdminLogin ? 'Admin' : 'Alumni'} Login</h2>
        <form onSubmit={handleSubmit}>
          <LoginStyled.LoginStyledInput type={"email"} placeholder="Email" required onChange={(e) => setEmail(e.currentTarget.value)} />
          <LoginStyled.LoginStyledInput type={"password"} placeholder="Password" required onChange={(e) => setPassword(e.currentTarget.value)} />

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