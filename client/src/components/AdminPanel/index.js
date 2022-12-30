import * as StyledAdmin from '../../Styles/AdminPanel.styled';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { useEffect, useState } from 'react';


import AdminPanelDeletePopup from './AdminPanelDeletePopup';
import AdminPanelAddStudentPopup from './AdminPanelAddStudentPopup';
import AdminPanelShowStudentInfo from './AdminPanelShowStudentInfo';

import { loadAllStudentsApi } from '../../store/api/adminApi';
import { signOutAdmin } from '../../store/slices/adminSlice';

const AdminPanel = () => {

  // const adminData = useSelector(state => state.adminSlice.data);
  const alumnisSlice = useSelector(state => state.userSlice);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delUserObjId, setDelUserObjId] = useState(null);

  const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const [isShowInfoPopupShowing, setShowInfoPopupShowing] = useState(false);
  const [showInfoObjId, setShowInfoObjId] = useState(null);

  const dispatch = useDispatch();

  const logOut = (e) => {
    e.preventDefault();
    dispatch(signOutAdmin());
  }

  useEffect(() => {
    if (alumnisSlice && alumnisSlice.data.length === 0) {
      dispatch(loadAllStudentsApi());
    }
  }, [dispatch, alumnisSlice]);


  return (
    (
      <StyledAdmin.StyledAdminPanel>

        <StyledAdmin.StyledAdminPanelHeader>
          <StyledAdmin.StyledAdminPanelHeading>
            Admin Panel
          </StyledAdmin.StyledAdminPanelHeading>

          <StyledAdmin.StyledAminPanelHeaderButton onClick={logOut}>
            Log Out
          </StyledAdmin.StyledAminPanelHeaderButton>

        </StyledAdmin.StyledAdminPanelHeader>



        <StyledAdmin.StyledAdminPanelTable>
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
                    <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'red'} onClick={() => { setDelUserObjId(item._id); setIsDelPopupShowing(true); }}>
                      <RiDeleteBin6Line />
                    </StyledAdmin.StyledAdminPanelTableSvg>

                    <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'#227C70'} onClick={() => { setShowInfoObjId(item._id); setShowInfoPopupShowing(true); }}>
                      <AiFillEye />
                    </StyledAdmin.StyledAdminPanelTableSvg>
                  </td>
                </tr>
              ))
            }

          </tbody>

        </StyledAdmin.StyledAdminPanelTable>

        {
          isDelPopupShowing && <AdminPanelDeletePopup setIsDelPopupShowing={setIsDelPopupShowing} setDelUserObjId={setDelUserObjId} delUserObjId={delUserObjId} />
        }

        {
          isAddPopupShowing && <AdminPanelAddStudentPopup setIsAddPopupShowing={setIsAddPopupShowing} />
        }

        {
          isShowInfoPopupShowing && <AdminPanelShowStudentInfo setShowInfoPopupShowing={setShowInfoPopupShowing} setShowInfoObjId={setShowInfoObjId} showInfoObjId={showInfoObjId} />
        }


        <StyledAdmin.StyledAdminPanelAddButton onClick={() => setIsAddPopupShowing(true)}>
          <GrAdd />
        </StyledAdmin.StyledAdminPanelAddButton>

      </StyledAdmin.StyledAdminPanel>
    )
  )
}

export default AdminPanel;