import { useRef, useState } from 'react';
import * as Styled from '../../Styles/AddData/AddData.styled';
import { AiOutlineUpload } from 'react-icons/ai';
import axios from 'axios';
import * as XLSX from 'xlsx';
import useLoading from '../../hooks/useLoading';

const AddData = () => {

  const [excelFile, setExcelFile] = useState(null);
  const [dataFromExcelFile, setDataFromExcelFile] = useState(null);
  const inputRef = useRef(null);

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const setGlobalLoading = useLoading();



  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' })
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = ((error) => {
        reject(error);
      })

    });

    promise.then((d) => {
      setDataFromExcelFile(d);
    })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    try {
      setGlobalLoading(true);
      setSuccessMessage(null);
      setErrorMessage(null);
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERV}/api/batchalumniupload`, { data: dataFromExcelFile });
      inputRef.current.value = null;
      setExcelFile(null);
      setDataFromExcelFile(null);
      setGlobalLoading(false);
      setSuccessMessage("Data Uploaded Successfuly");
    } catch (error) {
      inputRef.current.value = null;
      setExcelFile(null);
      setDataFromExcelFile(null);
      setGlobalLoading(false);
      console.log(error)
      setErrorMessage(error.response.data.error.message || error.response.data.message);
    }
  }

  return (
    <Styled.Section>
      <Styled.Header>
        <Styled.Heading>Add To DB</Styled.Heading>
      </Styled.Header>

      <Styled.ChooseFileContainer>
        <input type='file' accept=".xlsx" id='excelFileInput' style={{ display: 'none' }} ref={inputRef} onChange={e => {
          if (e.target.files) {
            const file = e.target.files[0];
            setExcelFile(file);
            readExcel(file);
          } else {
            setExcelFile(null)
          }

        }} />
        <Styled.ChooseFile htmlFor='excelFileInput'>
          <Styled.ChooseFileImg>
            <AiOutlineUpload />
          </Styled.ChooseFileImg>
          <Styled.ChooseFileText>Click to choose file</Styled.ChooseFileText>
        </Styled.ChooseFile>
      </Styled.ChooseFileContainer>

      <Styled.UploadButtonContainer>
        {
          excelFile && (
            <>
              <Styled.UploadButtonFilename>{excelFile.name}</Styled.UploadButtonFilename>
              <Styled.UploadButton onClick={handleSubmit}>Upload</Styled.UploadButton>
            </>
          )
        }

      </Styled.UploadButtonContainer>

      {
        successMessage && <Styled.Message color='green'>{successMessage}</Styled.Message>
      }

      {
        errorMessage && <Styled.Message color='red'>{errorMessage}</Styled.Message>
      }


    </Styled.Section>
  )
}

export default AddData;