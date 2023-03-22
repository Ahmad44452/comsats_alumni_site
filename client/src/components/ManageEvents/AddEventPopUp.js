import { useRef, useState } from 'react';
import * as Styled from '../../Styles/ManageEvents/AddEventPopUp.styled'
import { GrFormClose } from 'react-icons/gr';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';

const AddEventPopUp = ({ setIsAddPopupShowing, fetchEvents }) => {

  const [dummyUpdate, setDummyUpdate] = useState(0);
  const setGlobalLoading = useLoading();
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [file, setFile] = useState([]);

  const eventNameRef = useRef();
  const chooseImageButtonRef = useRef();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = () => {
        reject(error);
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setSuccessMessage(null);
      setGlobalLoading(true);

      const base64 = await convertBase64(file);

      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/img/addevent`, {
        image: base64,
        name: eventName,
        location: eventLocation,
        timing: eventTime,
        description: eventDescription
      });

      if (res) {
        fetchEvents();
        setGlobalLoading(false);
        setIsAddPopupShowing(false);
        // imageHeadingRef.current.value = "";
        // setImageHeading('');
        // chooseImageButtonRef.current.files = [];
        // setFile(null);
        // setSuccessMessage('Image Added!');
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

  const handleChooseImage = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setDummyUpdate(prev => prev + 1);
  }


  return (
    <Styled.BlackScreen>

      <Styled.Container>

        <Styled.Content>

          <Styled.Close>
            <GrFormClose onClick={() => setIsAddPopupShowing(false)} />
          </Styled.Close>

          <Styled.Heading>
            Add Event
          </Styled.Heading>

          <form onSubmit={handleSubmit}>

            <Styled.TextInput type={'text'} placeholder='Event Name' ref={eventNameRef} required onChange={(e) => setEventName(e.currentTarget.value)} />
            <Styled.TextInput type={'text'} placeholder='Event Location' required onChange={(e) => setEventLocation(e.currentTarget.value)} />
            <Styled.TextInput type={'text'} placeholder='Event Timing' required onChange={(e) => setEventTime(e.currentTarget.value)} />
            <Styled.TextArea type={'text'} placeholder='Event Description' rows={5} required onChange={(e) => setEventDescription(e.currentTarget.value)} />



            <Styled.ChooseFileButtonContainer >
              <div>
                <Styled.ChooseFileButton htmlFor={`bgImg`}>
                  Choose Background Image
                </Styled.ChooseFileButton>

                <Styled.FileName>
                  {
                    file ? file.name : 'No File Chosen'
                  }
                </Styled.FileName>

                <input style={{ visibility: 'hidden' }} ref={chooseImageButtonRef} required id={`bgImg`} type="file" accept='image/*' onChange={(e) => handleChooseImage(e)} />
              </div>
            </Styled.ChooseFileButtonContainer>










            {/* <Styled.TextInput ref={passwordRef} type={'password'} placeholder='Password' required onChange={(e) => setPassword(e.currentTarget.value)} />
            <Styled.Generate onClick={generatePassword}>
              Auto generate password
            </Styled.Generate> */}


            <Styled.Error>{error}</Styled.Error>
            <Styled.SubmitInput value={"ADD"} type={'submit'} />
            <Styled.Success>{successMessage}</Styled.Success>
          </form>




        </Styled.Content>

      </Styled.Container>

    </Styled.BlackScreen>
  )
}

export default AddEventPopUp;