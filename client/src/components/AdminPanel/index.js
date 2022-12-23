import * as StyledAdmin from '../../Styles/AdminPanel.styled';
import { useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { useState } from 'react';


import AdminPanelDeletePopup from './AdminPanelDeletePopup';
import AdminPanelAddStudentPopup from './AdminPanelAddStudentPopup';

const AdminPanel = () => {

  const adminData = useSelector(state => state.adminSlice.data);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);

  return (
    (
      <StyledAdmin.StyledAdminPanel>
        {/* <StyledAdmin.StyledAdminPanelGreeting>
          Hello {adminData.name}!
        </StyledAdmin.StyledAdminPanelGreeting> */}

        <StyledAdmin.StyledAdminPanelTable>
          <thead>
            <tr>
              <th>Reg #</th>
              <th>Password</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>


            <tr>
              <td>01</td>
              <td>asdawqf</td>
              <td>
                <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'red'}>
                  <RiDeleteBin6Line />
                </StyledAdmin.StyledAdminPanelTableSvg>

                <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'#227C70'}>
                  <AiFillEye />
                </StyledAdmin.StyledAdminPanelTableSvg>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>asdawqf</td>
              <td>
                <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'red'}>
                  <RiDeleteBin6Line onClick={() => setIsDelPopupShowing(true)} />
                </StyledAdmin.StyledAdminPanelTableSvg>

                <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'#227C70'}>
                  <AiFillEye />
                </StyledAdmin.StyledAdminPanelTableSvg>
              </td>
            </tr>
          </tbody>

        </StyledAdmin.StyledAdminPanelTable>

        {
          isDelPopupShowing && <AdminPanelDeletePopup setIsDelPopupShowing={setIsDelPopupShowing} />
        }

        {
          isAddPopupShowing && <AdminPanelAddStudentPopup setIsAddPopupShowing={setIsAddPopupShowing} />
        }


        <StyledAdmin.StyledAdminPanelAddButton onClick={() => setIsAddPopupShowing(true)}>
          <GrAdd />
        </StyledAdmin.StyledAdminPanelAddButton>

      </StyledAdmin.StyledAdminPanel>
    )
  )
}

export default AdminPanel;