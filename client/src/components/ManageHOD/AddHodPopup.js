import axios from 'axios';
import { useState, useRef } from 'react';
import * as StyledPopup from '../../Styles/ManageHOD/ManageHODAddHOD.styled';
import { GrFormClose } from 'react-icons/gr';

import useLoading from '../../hooks/useLoading';


// import { loadAllAlumnisApi } from '../../store/api/adminApi';

const AddHodPopup = ({ setIsAddPopupShowing, fetchHods }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const setGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);


  const generatePassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8;
    let generatedPassword = "";

    for (let i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }

    passwordRef.current.value = generatedPassword;
    setPassword(generatedPassword)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setSuccessMessage(null);
      setGlobalLoading(true);

      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/register`, { email, name, password, role: 'HOD' });

      if (res) {
        passwordRef.current.value = "";
        emailRef.current.value = "";
        nameRef.current.value = "";
        setEmail('');
        setName('');
        setPassword('');
        setSuccessMessage('HOD Added!');
        fetchHods();
      }


      setGlobalLoading(false);

    } catch (err) {
      setGlobalLoading(false);
      // console.log(err);
      if (err.response)
        setError(err.response.data.message);
      else
        setError('Could not reach server!');
    }
  }





  return (
    <StyledPopup.AddContainer>

      <StyledPopup.Add>

        <StyledPopup.AddContent>

          <StyledPopup.Close>
            <GrFormClose onClick={() => setIsAddPopupShowing(false)} />
          </StyledPopup.Close>

          <StyledPopup.AddHeading>
            Add HOD
          </StyledPopup.AddHeading>

          <form onSubmit={handleSubmit}>
            <StyledPopup.AddTextInput ref={emailRef} type={'email'} placeholder='Email' required onChange={(e) => setEmail(e.currentTarget.value)} />
            <StyledPopup.AddTextInput ref={nameRef} type={'text'} placeholder='Name' required onChange={(e) => setName(e.currentTarget.value)} />
            <StyledPopup.AddTextInput ref={passwordRef} type={'password'} placeholder='Password' required onChange={(e) => setPassword(e.currentTarget.value)} />
            <StyledPopup.AddGenerate onClick={generatePassword}>
              Auto generate password
            </StyledPopup.AddGenerate>


            <StyledPopup.AddError>{error}</StyledPopup.AddError>
            <StyledPopup.AddSubmitInput value={"ADD"} type={'submit'} />
            <StyledPopup.AddSuccess>{successMessage}</StyledPopup.AddSuccess>
          </form>




        </StyledPopup.AddContent>

      </StyledPopup.Add>

    </StyledPopup.AddContainer>
  )
}

export default AddHodPopup;