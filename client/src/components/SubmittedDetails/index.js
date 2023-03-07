import * as StyledSubmittedDetails from '../../Styles/SubmittedDetails/SubmittedDetails.styled';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { useEffect, useState } from 'react';


import AdminPanelDeletePopup from './SubmittedDetailsDeletePopup';
import AdminPanelShowStudentInfo from './SubmittedDetailsShowStudentInfo';

import { loadAllAlumnisApi } from '../../store/api/adminApi';

const SubmittedDetails = () => {

  // const adminData = useSelector(state => state.adminSlice.data);
  const alumnisSlice = useSelector(state => state.userSlice);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delUserObjId, setDelUserObjId] = useState(null);

  // const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const [isShowInfoPopupShowing, setShowInfoPopupShowing] = useState(false);
  const [showInfoObjId, setShowInfoObjId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alumnisSlice && alumnisSlice.data.length === 0) {
      dispatch(loadAllAlumnisApi());
    }
  }, [dispatch, alumnisSlice]);


  return (
    (
      <StyledSubmittedDetails.SubmittedDetails>

        <StyledSubmittedDetails.SubmittedDetailsHeader>
          <StyledSubmittedDetails.SubmittedDetailsHeading>
            Alumni Details
          </StyledSubmittedDetails.SubmittedDetailsHeading>
        </StyledSubmittedDetails.SubmittedDetailsHeader>



        <StyledSubmittedDetails.SubmittedDetailsTable>
          <thead>
            <tr>
              <th>Reg #</th>
              <th>Password</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>

            {
              alumnisSlice.data.map(item => (
                <tr key={item._id}>
                  <td>{item.registrationNumber}</td>
                  <td>{item.password}</td>
                  <td>
                    <StyledSubmittedDetails.SubmittedDetailsTableSvg hoverColor={'red'} onClick={() => { setDelUserObjId(item._id); setIsDelPopupShowing(true); }}>
                      <RiDeleteBin6Line />
                    </StyledSubmittedDetails.SubmittedDetailsTableSvg>

                    <StyledSubmittedDetails.SubmittedDetailsTableSvg hoverColor={'#227C70'} onClick={() => { setShowInfoObjId(item._id); setShowInfoPopupShowing(true); }}>
                      <AiFillEye />
                    </StyledSubmittedDetails.SubmittedDetailsTableSvg>
                  </td>
                </tr>
              ))
            }

          </tbody>

        </StyledSubmittedDetails.SubmittedDetailsTable>

        {
          isDelPopupShowing && <AdminPanelDeletePopup setIsDelPopupShowing={setIsDelPopupShowing} setDelUserObjId={setDelUserObjId} delUserObjId={delUserObjId} />
        }

        {
          isShowInfoPopupShowing && <AdminPanelShowStudentInfo setShowInfoPopupShowing={setShowInfoPopupShowing} setShowInfoObjId={setShowInfoObjId} showInfoObjId={showInfoObjId} />
        }

      </StyledSubmittedDetails.SubmittedDetails>
    )
  )
}

export default SubmittedDetails;