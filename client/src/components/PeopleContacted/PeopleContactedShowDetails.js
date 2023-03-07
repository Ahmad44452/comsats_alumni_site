import * as PeopleContactedDetails from '../../Styles/PeopleContacted/PeopleContactedShowDetails.styled';
import { GrFormClose } from 'react-icons/gr';
import useLoading from '../../hooks/useLoading';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PeopleContactedShowDetails = ({ setShowInfoPopupShowing, setShowInfoObjId, showInfoObjId }) => {

  const [contactDetails, setContactDetails] = useState((null));
  const setGlobalLoading = useLoading();


  useEffect(() => {


    if (contactDetails === null) {
      const controller = new AbortController();
      (async () => {
        try {
          setGlobalLoading(true);
          const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/getcontactedbyid`, { id: showInfoObjId }, { signal: controller.signal });

          if (res) {
            setContactDetails(res.data);
          }

          setGlobalLoading(false);
        } catch (err) {
          setContactDetails(null);
          setGlobalLoading(false);
        }
      })();

      return () => {

        controller.abort();
      }
    }





  }, [setGlobalLoading, showInfoObjId, contactDetails])



  return (
    <PeopleContactedDetails.Container>

      <PeopleContactedDetails.Content>
        <PeopleContactedDetails.Close onClick={() => { setShowInfoObjId(null); setShowInfoPopupShowing(false); }}>
          <GrFormClose />
        </PeopleContactedDetails.Close>

        <PeopleContactedDetails.Heading>Contact Info</PeopleContactedDetails.Heading>

        {
          contactDetails && (
            <PeopleContactedDetails.InfoContainer>

              <PeopleContactedDetails.InfoGroup>
                <PeopleContactedDetails.InfoLabel>Name:</PeopleContactedDetails.InfoLabel>
                <PeopleContactedDetails.InfoText>{contactDetails.name}</PeopleContactedDetails.InfoText>
              </PeopleContactedDetails.InfoGroup>

              <PeopleContactedDetails.InfoGroup>
                <PeopleContactedDetails.InfoLabel>Email:</PeopleContactedDetails.InfoLabel>
                <PeopleContactedDetails.InfoText>{contactDetails.email}</PeopleContactedDetails.InfoText>
              </PeopleContactedDetails.InfoGroup>

              <PeopleContactedDetails.InfoGroup>
                <PeopleContactedDetails.InfoLabel>Address:</PeopleContactedDetails.InfoLabel>
                <PeopleContactedDetails.InfoText>{contactDetails.address}</PeopleContactedDetails.InfoText>
              </PeopleContactedDetails.InfoGroup>

              <PeopleContactedDetails.InfoGroup>
                <PeopleContactedDetails.InfoLabel>Subject:</PeopleContactedDetails.InfoLabel>
                <PeopleContactedDetails.InfoText>{contactDetails.subject}</PeopleContactedDetails.InfoText>
              </PeopleContactedDetails.InfoGroup>

              <PeopleContactedDetails.InfoGroup>
                <PeopleContactedDetails.InfoLabel>Message:</PeopleContactedDetails.InfoLabel>
                <PeopleContactedDetails.InfoText>{contactDetails.message}</PeopleContactedDetails.InfoText>
              </PeopleContactedDetails.InfoGroup>


            </PeopleContactedDetails.InfoContainer>
          )
        }



      </PeopleContactedDetails.Content>
    </PeopleContactedDetails.Container>
  )
}

export default PeopleContactedShowDetails;