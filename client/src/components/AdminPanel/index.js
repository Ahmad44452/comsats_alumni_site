import * as StyledAdmin from '../../Styles/AdminPanel.styled';
import { useSelector } from 'react-redux';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { GrAdd, GrFormClose } from 'react-icons/gr';

const AdminPanel = () => {

  const adminData = useSelector(state => state.adminSlice.data);

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
                  <RiDeleteBin6Line />
                </StyledAdmin.StyledAdminPanelTableSvg>

                <StyledAdmin.StyledAdminPanelTableSvg hoverColor={'#227C70'}>
                  <AiFillEye />
                </StyledAdmin.StyledAdminPanelTableSvg>
              </td>
            </tr>
          </tbody>

        </StyledAdmin.StyledAdminPanelTable>







        <StyledAdmin.StyledAdminPanelDeleteContainer>

          <StyledAdmin.StyledAdminPanelDelete>

            <StyledAdmin.StyledAdminPanelDeleteContent>

              <StyledAdmin.StyledAdminPanelClose>
                <GrFormClose />
              </StyledAdmin.StyledAdminPanelClose>





              <StyledAdmin.StyledAdminPanelDeleteText>
                Are you sure you want to delete?
              </StyledAdmin.StyledAdminPanelDeleteText>


              <StyledAdmin.StyledAdminPanelDeleteButtonContainer>
                <StyledAdmin.StyledAdminPanelDeleteButton color={'#2243ae'}>Cancel</StyledAdmin.StyledAdminPanelDeleteButton>
                <StyledAdmin.StyledAdminPanelDeleteButton color={'#DC0000'}>Delete</StyledAdmin.StyledAdminPanelDeleteButton>
              </StyledAdmin.StyledAdminPanelDeleteButtonContainer>



            </StyledAdmin.StyledAdminPanelDeleteContent>



          </StyledAdmin.StyledAdminPanelDelete>

        </StyledAdmin.StyledAdminPanelDeleteContainer>







        <StyledAdmin.StyledAdminPanelAddButton>
          <GrAdd />
        </StyledAdmin.StyledAdminPanelAddButton>

      </StyledAdmin.StyledAdminPanel>
    )
  )
}

export default AdminPanel;