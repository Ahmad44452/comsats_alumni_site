import * as Styled from '../../Styles/ManageHOD/ManageHOD.styled';
import { useState, useEffect } from 'react'
import useLoading from '../../hooks/useLoading';
import AddHodPopup from './AddHodPopup';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import HodDeletePopup from './DeletePopup';
import { useCallback } from 'react';

const ManageHOD = () => {

  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delHodObjId, setDelHodObjId] = useState(null);

  const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const [hodsInfo, setHodsInfo] = useState(null);

  const setGlobalLoading = useLoading();

  const fetchHods = useCallback(async () => {

    try {
      setGlobalLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/gethods`);
      setHodsInfo(res.data);
      setGlobalLoading(false);

    } catch (error) {
      console.log(error);
    }


  }, [setGlobalLoading])

  useEffect(() => {

    if (hodsInfo === null) {
      fetchHods();
    }

  }, [hodsInfo, fetchHods]);

  return (
    (
      <Styled.Section>

        <Styled.Header>
          <Styled.Heading>
            Manage HODs
          </Styled.Heading>
        </Styled.Header>



        <Styled.Table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>

          <tbody>

            {
              hodsInfo && hodsInfo.map(hod => (
                <tr key={hod._id}>
                  <td>{hod.email}</td>
                  <td>{hod.name}</td>
                  <td>{hod.password}</td>
                  <td>
                    <Styled.TableSvg hoverColor={'red'} onClick={() => { setDelHodObjId(hod._id); setIsDelPopupShowing(true); }}>
                      <RiDeleteBin6Line />
                    </Styled.TableSvg>
                  </td>
                </tr>
              ))
            }

          </tbody>

        </Styled.Table>

        <Styled.AddButton onClick={() => setIsAddPopupShowing(true)}>
          <AiOutlinePlus />
        </Styled.AddButton>

        {
          isAddPopupShowing && (<AddHodPopup setIsAddPopupShowing={setIsAddPopupShowing} fetchHods={fetchHods} />)
        }

        {
          isDelPopupShowing && <HodDeletePopup setIsDelPopupShowing={setIsDelPopupShowing} setDelHodObjId={setDelHodObjId} delHodObjId={delHodObjId} fetchHods={fetchHods} />
        }



      </Styled.Section>
    )
  )

}

export default ManageHOD;