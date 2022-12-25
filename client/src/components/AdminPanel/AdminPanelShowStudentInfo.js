import * as StyledShow from '../../Styles/AdminPanelShowStudentInfo.styled';
import { GrFormClose } from 'react-icons/gr';
import useLoading from '../../hooks/useLoading';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanelShowStudentInfo = ({ setShowInfoPopupShowing, setShowInfoObjId, showInfoObjId }) => {

  const [alumniInfo, setAlumniInfo] = useState((null));
  const setGlobalLoading = useLoading();

  useEffect(() => {


    if (alumniInfo === null) {
      const controller = new AbortController();
      (async () => {
        try {
          setGlobalLoading(true);
          const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/getalumnibyid`, { id: showInfoObjId }, { signal: controller.signal });

          if (res) {
            setAlumniInfo(res.data);
          }

          setGlobalLoading(false);
        } catch (err) {
          setAlumniInfo(null);
          setGlobalLoading(false);
        }
      })();

      return () => {

        controller.abort();
      }
    }





  }, [setGlobalLoading, showInfoObjId, alumniInfo])



  return (
    <StyledShow.StyledAdminPanelShowContainer>

      <StyledShow.StyledAdminPanelShowContent>
        <StyledShow.StyledAdminPanelShowClose onClick={() => { setShowInfoObjId(null); setShowInfoPopupShowing(false); }}>
          <GrFormClose />
        </StyledShow.StyledAdminPanelShowClose>

        <StyledShow.StyledAdminPanelShowHeading>Student Info</StyledShow.StyledAdminPanelShowHeading>

        {
          alumniInfo && (
            <StyledShow.StyledAdminPanelShowInfoContainer>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Name:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.name}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Registration Number:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.registrationNumber}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Password:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.password}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Department:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.department}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Email:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.email}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Sector:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.sector}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Supervisor Name:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.supervisorName}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Office Email:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.officeEmail}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Contact Number:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.contactNumber}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Graduation Year:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.graduationYear}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Position Held:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.positionHeld}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Date of Joining:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.dateOfJoining}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Organization Name:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.organizationName}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Supervisor Position:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.supervisorPosition}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>

              <StyledShow.StyledAdminPanelShowInfoGroup>
                <StyledShow.StyledAdminPanelShowInfoLabel>Country Name:</StyledShow.StyledAdminPanelShowInfoLabel>
                <StyledShow.StyledAdminPanelShowInfoText>{alumniInfo.countryName}</StyledShow.StyledAdminPanelShowInfoText>
              </StyledShow.StyledAdminPanelShowInfoGroup>


            </StyledShow.StyledAdminPanelShowInfoContainer>
          )
        }



      </StyledShow.StyledAdminPanelShowContent>
    </StyledShow.StyledAdminPanelShowContainer>
  )
}

export default AdminPanelShowStudentInfo;