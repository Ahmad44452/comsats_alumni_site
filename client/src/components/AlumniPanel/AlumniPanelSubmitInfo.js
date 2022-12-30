import { useEffect, useRef, useState } from 'react';
import * as StyledAlumni from '../../Styles/AlumniPanel.styled';
import useLoading from '../../hooks/useLoading';
import { setDataAlumni, signOutAlumni } from '../../store/slices/alumniSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const AlumniPanelSubmitInfo = () => {

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [officeEmail, setOfficeEmail] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [positionHeld, setPositionHeld] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [supervisorPosition, setSupervisorPosition] = useState('');
  const [countryName, setCountryName] = useState('');

  const nameRef = useRef();
  const contactNumberRef = useRef();
  const departmentRef = useRef();
  const emailRef = useRef();
  const sectorRef = useRef();
  const supervisorNameRef = useRef();
  const officeEmailRef = useRef();
  const graduationYearRef = useRef();
  const positionHeldRef = useRef();
  const dateOfJoiningRef = useRef();
  const organizationNameRef = useRef();
  const supervisorPositionRef = useRef();
  const countryNameRef = useRef();
  const registrationNumberRef = useRef();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const setGlobalLoading = useLoading();
  const dispatch = useDispatch();
  const alumniData = useSelector(state => state.alumniSlice.data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setGlobalLoading(true);
      setError(null);
      setSuccess(null);


      const updateData = {
        name,
        contactNumber,
        department,
        email,
        sector,
        supervisorName,
        officeEmail,
        graduationYear,
        positionHeld,
        dateOfJoining,
        organizationName,
        supervisorPosition,
        countryName
      }

      const res = await axios.patch(`${process.env.REACT_APP_BACKEND_SERV}/api/updatealumni`, { id: alumniData._id, updateData });


      dispatch(setDataAlumni(res.data));
      setSuccess('Data updated successfuly');
      setGlobalLoading(false);

    } catch (err) {

      setGlobalLoading(false);
      if (err.response)
        setError(err.response.data.message);
      else
        setError('Could not reach server!');
    }
  }

  const logOut = (e) => {
    e.preventDefault();
    dispatch(signOutAlumni());
  }

  useEffect(() => {
    nameRef.current.value = alumniData.name;
    contactNumberRef.current.value = alumniData.contactNumber;
    departmentRef.current.value = alumniData.department;
    emailRef.current.value = alumniData.email;
    sectorRef.current.value = alumniData.sector;
    supervisorNameRef.current.value = alumniData.supervisorName;
    officeEmailRef.current.value = alumniData.officeEmail;
    graduationYearRef.current.value = alumniData.graduationYear;
    positionHeldRef.current.value = alumniData.positionHeld;
    dateOfJoiningRef.current.value = alumniData.dateOfJoining;
    organizationNameRef.current.value = alumniData.organizationName;
    supervisorPositionRef.current.value = alumniData.supervisorPosition;
    countryNameRef.current.value = alumniData.countryName;
    registrationNumberRef.current.value = alumniData.registrationNumber;
  }, [alumniData])

  return (
    <StyledAlumni.StyledAdminPanel>

      <StyledAlumni.StyledAlumniHeader>

        <StyledAlumni.StyledAdminPanelHeading>
          Personal Information
        </StyledAlumni.StyledAdminPanelHeading>

        <StyledAlumni.StyledAlumniPanelHeaderButton onClick={logOut}>
          Log Out
        </StyledAlumni.StyledAlumniPanelHeaderButton>

      </StyledAlumni.StyledAlumniHeader>




      <form onSubmit={handleSubmit}>

        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Name</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={nameRef} placeholder='Enter name' onChange={e => setName(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Contact number</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={contactNumberRef} placeholder='Enter contact number' onChange={e => setContactNumber(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>



        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Registration Number</label>
            <StyledAlumni.StyledAdminPanelInputText disabled type='text' ref={registrationNumberRef} placeholder='Enter registration number' />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Graduation Year</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={graduationYearRef} placeholder='Enter graduation year' onChange={e => setGraduationYear(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>



        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Department</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={departmentRef} placeholder='Enter department' onChange={e => setDepartment(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Position Held</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={positionHeldRef} placeholder='Enter position held' onChange={e => setPositionHeld(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>


        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Email</label>
            <StyledAlumni.StyledAdminPanelInputText type='email' ref={emailRef} placeholder='Enter email' onChange={e => setEmail(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Date Of Joining</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={dateOfJoiningRef} placeholder='Enter date of joining' onChange={e => setDateOfJoining(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>



        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Sector</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={sectorRef} placeholder='Enter sector' onChange={e => setSector(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Organization Name</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={organizationNameRef} placeholder='Enter organization name' onChange={e => setOrganizationName(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>


        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Supervisor Name</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={supervisorNameRef} placeholder='Enter supervisor name' onChange={e => setSupervisorName(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Supervisor Position</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={supervisorPositionRef} placeholder='Enter supervisor position' onChange={e => setSupervisorPosition(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>

        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Office Email</label>
            <StyledAlumni.StyledAdminPanelInputText type='email' ref={officeEmailRef} placeholder='Enter office email' onChange={e => setOfficeEmail(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Country Name</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={countryNameRef} placeholder='Enter country name' onChange={e => setCountryName(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>

        <StyledAlumni.StyledAdminPanelError>
          {error}
        </StyledAlumni.StyledAdminPanelError>

        <StyledAlumni.StyledAdminPanelSuccess>
          {success}
        </StyledAlumni.StyledAdminPanelSuccess>

        <StyledAlumni.StyledAdminPanelInputSubmit type={'submit'} value='UPDATE' />
      </form>


    </StyledAlumni.StyledAdminPanel>
  )
}

export default AlumniPanelSubmitInfo;