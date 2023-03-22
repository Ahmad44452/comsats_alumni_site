import * as StyledSubmittedDetails from '../../Styles/SubmittedDetails/SubmittedDetails.styled';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { useEffect, useState } from 'react';

import { StyledLoadMoreButton } from '../../Styles/Button.styled';
import AdminPanelDeletePopup from './SubmittedDetailsDeletePopup';
import AdminPanelShowStudentInfo from './SubmittedDetailsShowStudentInfo';

import { loadAllAlumnisApi } from '../../store/api/adminApi';

import useLoading from '../../hooks/useLoading';

const SubmittedDetails = () => {

  // const adminData = useSelector(state => state.adminSlice.data);
  const alumnisSlice = useSelector(state => state.userSlice);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delUserObjId, setDelUserObjId] = useState(null);

  // const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const [isShowInfoPopupShowing, setShowInfoPopupShowing] = useState(false);
  const [showInfoObjId, setShowInfoObjId] = useState(null);

  const setGlobalLoading = useLoading();
  const dispatch = useDispatch();

  const fetchAlumniSubmittedInfo = (pageNo) => {
    setGlobalLoading(true);
    dispatch(loadAllAlumnisApi(pageNo)).then(() => setGlobalLoading(false))
  }

  useEffect(() => {
    if (alumnisSlice && alumnisSlice.data === null) {
      fetchAlumniSubmittedInfo(1)
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
              alumnisSlice && alumnisSlice.data && alumnisSlice.data.docs.map(item => (
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
          alumnisSlice && alumnisSlice.data && alumnisSlice.data.hasNextPage && <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <StyledLoadMoreButton onClick={() => fetchAlumniSubmittedInfo(alumnisSlice.data.page + 1)}>Load More</StyledLoadMoreButton>
          </div>
        }

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