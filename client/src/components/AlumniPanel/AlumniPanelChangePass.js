import { useState } from 'react';
import * as StyledAlumni from '../../Styles/AlumniPanel.styled';
import useLoading from '../../hooks/useLoading';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setDataAlumni } from '../../store/slices/alumniSlice';

const AlumniPanelChangePass = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const setGlobalLoading = useLoading();

  const alumniId = useSelector(state => state.alumniSlice.data._id);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setGlobalLoading(true);
      setError(null);

      if (password === confirmPassword) {
        const res = await axios.patch(`${process.env.REACT_APP_BACKEND_SERV}/api/changealumnipass`, { id: alumniId, newPassword: password });

        dispatch(setDataAlumni(res.data));

      } else {
        setError("Both passwords should be same");
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
    <StyledAlumni.StyledAdminPanelChangePass>

      <StyledAlumni.StyledAminPanelChangePassContainer>

        <StyledAlumni.StyledAdminPanelChangePassHeading>
          Set New Password
        </StyledAlumni.StyledAdminPanelChangePassHeading>

        <form onSubmit={handleSubmit}>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <StyledAlumni.StyledAdminPanelInputText type='password' placeholder='Enter New Password' required onChange={(e) => setPassword(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <StyledAlumni.StyledAdminPanelInputText type='password' placeholder='Enter New Password Again' required onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelChangePassError>
            {error}
          </StyledAlumni.StyledAdminPanelChangePassError>

          <StyledAlumni.StyledAdminPanelInputSubmit value={'SUBMIT'} type={'submit'} />

        </form>

      </StyledAlumni.StyledAminPanelChangePassContainer>

    </StyledAlumni.StyledAdminPanelChangePass>
  )
}

export default AlumniPanelChangePass;