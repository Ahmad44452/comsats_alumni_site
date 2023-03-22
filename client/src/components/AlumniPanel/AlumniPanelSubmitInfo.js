import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import * as StyledAlumni from '../../Styles/AlumniPanel.styled';
import useLoading from '../../hooks/useLoading';
import { setDataAlumni, signOutAlumni } from '../../store/slices/alumniSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { AiOutlineDown } from 'react-icons/ai';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import './styles.css';

const AlumniPanelSubmitInfo = () => {

  const departmentsList = ['BAF', 'BBA', 'BBC', 'BCS', 'BEE', 'BEN', 'BME', 'BSE', 'BSI', 'CVE', 'FSN', 'MB4', 'RBS', 'RCS', 'RMM', 'RMS', 'RMT'];

  const currentYear = new Date().getFullYear() % 100;
  const allBatches = ['FA17'];
  for (let startYear = 18; startYear < currentYear; startYear++) {
    allBatches.push(`SP${startYear}`)
    allBatches.push(`FA${startYear}`)
  }

  // const [selectedBatch, setSelectedBatch] = useState(batches[0]);

  const [isDepartmentDropboxVisible, setDepartmentDropboxVisible] = useState(false);
  const [isBatchesDropboxVisible, setBatchesDropboxVisible] = useState(false);

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [department, setDepartment] = useState(departmentsList[0]);
  const [batch, setBatch] = useState(allBatches[0]);
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [officeEmail, setOfficeEmail] = useState('');
  const [positionHeld, setPositionHeld] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState(new Date());
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
  // const graduationYearRef = useRef();
  const positionHeldRef = useRef();
  // const dateOfJoiningRef = useRef();
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
        batch,
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
    setDepartment(prev => alumniData.department || prev);
    setBatch(prev => alumniData.batch || prev);
    if (alumniData.dateOfJoining) {
      setDateOfJoining(new Date(alumniData.dateOfJoining));
    }
    // departmentRef.current.value = alumniData.department;
    emailRef.current.value = alumniData.email;
    sectorRef.current.value = alumniData.sector;
    supervisorNameRef.current.value = alumniData.supervisorName;
    officeEmailRef.current.value = alumniData.officeEmail;
    // graduationYearRef.current.value = alumniData.graduationYear;
    positionHeldRef.current.value = alumniData.positionHeld;
    // dateOfJoiningRef.current.value = alumniData.dateOfJoining;
    organizationNameRef.current.value = alumniData.organizationName;
    supervisorPositionRef.current.value = alumniData.supervisorPosition;
    countryNameRef.current.value = alumniData.countryName;
    registrationNumberRef.current.value = alumniData.registrationNumber;


    setName(alumniData.name)
    setContactNumber(alumniData.contactNumber)
    setEmail(alumniData.email)
    setSector(alumniData.sector)
    setSupervisorName(alumniData.supervisorName)
    setOfficeEmail(alumniData.officeEmail)
    setPositionHeld(alumniData.positionHeld)
    setOrganizationName(alumniData.organizationName)
    setSupervisorPosition(alumniData.supervisorPosition)
    setCountryName(alumniData.countryName)
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
            <label>Email</label>
            <StyledAlumni.StyledAdminPanelInputText type='email' ref={emailRef} placeholder='Enter email' onChange={e => setEmail(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>



        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Department</label>

            <StyledAlumni.StyledAlumniDropbox>
              <StyledAlumni.StyledAlumniDropboxContent onClick={() => setDepartmentDropboxVisible(prev => !prev)}>
                <p>{department}</p>
                <span>
                  <AiOutlineDown />
                </span>
              </StyledAlumni.StyledAlumniDropboxContent>
              {
                isDepartmentDropboxVisible && <StyledAlumni.StyledAlumniDropboxOptions>
                  <ul>
                    {departmentsList.map((item, i) => <li key={i} onClick={() => { setDepartment(item); setDepartmentDropboxVisible(false) }}>{item}</li>)}
                  </ul>
                </StyledAlumni.StyledAlumniDropboxOptions>
              }

            </StyledAlumni.StyledAlumniDropbox>

            {/* <StyledAlumni.StyledAdminPanelInputText type='text' ref={departmentRef} placeholder='Enter department' onChange={e => setDepartment(e.currentTarget.value)} /> */}
          </StyledAlumni.StyledAdminPanelInputGroup>

          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Batch</label>

            <StyledAlumni.StyledAlumniDropbox>
              <StyledAlumni.StyledAlumniDropboxContent onClick={() => setBatchesDropboxVisible(prev => !prev)}>
                <p>{batch}</p>
                <span>
                  <AiOutlineDown />
                </span>
              </StyledAlumni.StyledAlumniDropboxContent>
              {
                isBatchesDropboxVisible && <StyledAlumni.StyledAlumniDropboxOptions>
                  <ul>
                    {allBatches.map((item, i) => <li key={i} onClick={() => { setBatch(item); setBatchesDropboxVisible(false) }}>{item}</li>)}
                  </ul>
                </StyledAlumni.StyledAlumniDropboxOptions>
              }

            </StyledAlumni.StyledAlumniDropbox>
          </StyledAlumni.StyledAdminPanelInputGroup>
        </StyledAlumni.StyledAdminPanelInputGroupContainer>


        <StyledAlumni.StyledAdminPanelInputGroupContainer>
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Position Held</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={positionHeldRef} placeholder='Enter position held' onChange={e => setPositionHeld(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup>

          {/* <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Date Of Joining</label>
            <StyledAlumni.StyledAdminPanelInputText type='text' ref={dateOfJoiningRef} placeholder='Enter date of joining' onChange={e => setDateOfJoining(e.currentTarget.value)} />
          </StyledAlumni.StyledAdminPanelInputGroup> */}
          <StyledAlumni.StyledAdminPanelInputGroup>
            <label>Date Of Joining</label>
            <DatePicker onChange={setDateOfJoining} value={dateOfJoining} clearIcon={null} className='date-picker' />
            {/* <StyledAlumni.StyledAdminPanelInputText type='text' ref={departmentRef} placeholder='Enter department' onChange={e => setDepartment(e.currentTarget.value)} /> */}
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