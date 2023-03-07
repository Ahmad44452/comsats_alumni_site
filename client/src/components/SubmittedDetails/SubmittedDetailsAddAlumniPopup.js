import axios from 'axios';
import { useState, useRef } from 'react';
import * as StyledPopup from '../../Styles/SubmittedDetails/SubmittedDetailsAddStudent.styled';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

import useLoading from '../../hooks/useLoading';


import { loadAllAlumnisApi } from '../../store/api/adminApi';

const AdminPanelAddStudentPopup = ({ setIsAddPopupShowing }) => {

  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const setGlobalLoading = useLoading();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const passwordRef = useRef();
  const registrationNumberRef = useRef();
  const dispatch = useDispatch();




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

      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/addalumni`, { registrationNumber, password });

      if (res) {
        passwordRef.current.value = "";
        registrationNumberRef.current.value = "";
        setRegistrationNumber('');
        setPassword('');
        setSuccessMessage('Alumni Added!');
        dispatch(loadAllAlumnisApi());
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
    <StyledPopup.SubmittedDetailsAddContainer>

      <StyledPopup.SubmittedDetailsAdd>

        <StyledPopup.SubmittedDetailsAddContent>

          <StyledPopup.SubmittedDetailsClose>
            <GrFormClose onClick={() => setIsAddPopupShowing(false)} />
          </StyledPopup.SubmittedDetailsClose>

          <StyledPopup.SubmittedDetailsAddHeading>
            Add Student
          </StyledPopup.SubmittedDetailsAddHeading>

          <form onSubmit={handleSubmit}>
            <StyledPopup.SubmittedDetailsAddTextInput ref={registrationNumberRef} type={'text'} placeholder='Registration no' required onChange={(e) => setRegistrationNumber(e.currentTarget.value)} />


            <StyledPopup.SubmittedDetailsAddTextInput ref={passwordRef} type={'password'} placeholder='Password' required onChange={(e) => setPassword(e.currentTarget.value)} />
            <StyledPopup.SubmittedDetailsAddGenerate onClick={generatePassword}>
              Auto generate password
            </StyledPopup.SubmittedDetailsAddGenerate>


            <StyledPopup.SubmittedDetailsAddError>{error}</StyledPopup.SubmittedDetailsAddError>
            <StyledPopup.SubmittedDetailsAddSubmitInput value={"ADD"} type={'submit'} />
            <StyledPopup.SubmittedDetailsAddSuccess>{successMessage}</StyledPopup.SubmittedDetailsAddSuccess>
          </form>




        </StyledPopup.SubmittedDetailsAddContent>

      </StyledPopup.SubmittedDetailsAdd>

    </StyledPopup.SubmittedDetailsAddContainer>
  )
}

export default AdminPanelAddStudentPopup;