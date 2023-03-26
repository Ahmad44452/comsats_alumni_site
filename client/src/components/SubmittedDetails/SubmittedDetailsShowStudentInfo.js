import * as StyledShow from '../../Styles/SubmittedDetails/SubmittedDetailsShowStudentInfo.styled';
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
    <StyledShow.SubmittedDetailsShowContainer>

      <StyledShow.SubmittedDetailsShowContent>
        <StyledShow.SubmittedDetailsShowClose onClick={() => { setShowInfoObjId(null); setShowInfoPopupShowing(false); }}>
          <GrFormClose />
        </StyledShow.SubmittedDetailsShowClose>

        <StyledShow.SubmittedDetailsShowHeading>Student Info</StyledShow.SubmittedDetailsShowHeading>

        {
          alumniInfo && (
            <StyledShow.SubmittedDetailsShowInfoContainer>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Name:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.name || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Registration Number:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.registrationNumber || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Password:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.password || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Department:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.department || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Email:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.email || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Sector:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.sector || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Supervisor Name:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.supervisorName || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Office Email:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.officeEmail || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Contact Number:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.contactNumber || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Batch:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.batch || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Position Held:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.positionHeld || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Date of Joining:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{new Date(alumniInfo.dateOfJoining).toLocaleDateString() || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Organization Name:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.organizationName || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Supervisor Position:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.supervisorPosition || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>

              <StyledShow.SubmittedDetailsShowInfoGroup>
                <StyledShow.SubmittedDetailsShowInfoLabel>Country Name:</StyledShow.SubmittedDetailsShowInfoLabel>
                <StyledShow.SubmittedDetailsShowInfoText>{alumniInfo.countryName || '-'}</StyledShow.SubmittedDetailsShowInfoText>
              </StyledShow.SubmittedDetailsShowInfoGroup>


            </StyledShow.SubmittedDetailsShowInfoContainer>
          )
        }



      </StyledShow.SubmittedDetailsShowContent>
    </StyledShow.SubmittedDetailsShowContainer>
  )
}

export default AdminPanelShowStudentInfo;