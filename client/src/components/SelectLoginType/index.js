import Navbar from "../navbar";
import Footer from "../Footer";
import * as Styled from '../../Styles/SelectLoginType/SelectLoginType';
import { useState } from "react";
import Login from '../Login'

const SelectLoginType = () => {

  const [loginType, setLoginType] = useState(null);

  return (

    loginType ? <Login loginType={loginType} /> :
      <>
        <Navbar />
        <Styled.Section>
          <Styled.Heading>Select Login</Styled.Heading>
          <Styled.ButtonContainer>

            <Styled.Button onClick={() => setLoginType('AlumniLogin')}>Alumni<br />Login</Styled.Button>
            <Styled.Button onClick={() => setLoginType('AlumniSignup')}>Alumni<br />SignUp</Styled.Button>
            <Styled.Button onClick={() => setLoginType('Developer')}>Developer<br />Login</Styled.Button>
            <Styled.Button onClick={() => setLoginType('Admin')}>Admin<br />Login</Styled.Button>
            <Styled.Button onClick={() => setLoginType('HOD')}>HOD<br />Login</Styled.Button>

          </Styled.ButtonContainer>
        </Styled.Section>
        <Footer />
      </>
  )
}

export default SelectLoginType;