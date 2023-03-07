import { useRef, useState } from 'react';
import * as Styled from '../../Styles/GalleryManager/AddImagePopUp.styled'
import { GrFormClose } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import axios from 'axios';
import useLoading from '../../hooks/useLoading';
import { useDispatch } from 'react-redux';
import { loadAllImagessApi } from '../../store/api/imgApi';

const AddImagePopUp = ({ setIsAddPopupShowing }) => {

  const [dummyUpdate, setDummyUpdate] = useState(0);
  const [imagesAmount, setImagesAmount] = useState(1);
  const setGlobalLoading = useLoading();
  const [imageHeading, setImageHeading] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();

  const imageHeadingRef = useRef();
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

      const base64 = [];
      for (let i = 0; i < file.length; i++) {
        const convertedImg = await convertBase64(file[i]);
        base64.push(convertedImg);
      }

      // const base64 = await convertBase64(file);

      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/img/upload`, { images: base64, heading: imageHeading });

      if (res) {
        dispatch(loadAllImagessApi());
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

  const handleChooseImage = (e, i) => {
    e.preventDefault();

    const imageFiles = file;
    imageFiles[i] = e.target.files[0];
    setFile(imageFiles);
    setDummyUpdate(prev => prev + 1)
  }


  return (
    <Styled.BlackScreen>

      <Styled.Container>

        <Styled.Content>

          <Styled.Close>
            <GrFormClose onClick={() => setIsAddPopupShowing(false)} />
          </Styled.Close>

          <Styled.Heading>
            Add Image
          </Styled.Heading>

          <form onSubmit={handleSubmit}>

            <Styled.TextInput type={'text'} placeholder='Image Heading' ref={imageHeadingRef} required onChange={(e) => setImageHeading(e.currentTarget.value)} />

            {
              [...Array(imagesAmount)].map((item, i) => (
                <Styled.ChooseFileButtonContainer key={i}>
                  <div>
                    <Styled.ChooseFileButton htmlFor={`image${i}`}>
                      Choose File
                    </Styled.ChooseFileButton>

                    <Styled.FileName>
                      {
                        file[i] ? file[i].name : 'No File Chosen'
                      }
                    </Styled.FileName>

                    <input style={{ visibility: 'hidden' }} ref={chooseImageButtonRef} required id={`image${i}`} type="file" accept='image/*' onChange={(e) => handleChooseImage(e, i)} />
                  </div>

                  {
                    i === imagesAmount - 1 ?
                      <Styled.IncreaseImageAmount onClick={() => setImagesAmount(prev => prev + 1)}>
                        <IoMdAdd />
                      </Styled.IncreaseImageAmount> : null
                  }
                </Styled.ChooseFileButtonContainer>
              ))
            }








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

export default AddImagePopUp;