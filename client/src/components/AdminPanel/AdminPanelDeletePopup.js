import * as StyledAdmin from '../../Styles/AdminPanel.styled';
import { GrFormClose } from 'react-icons/gr';

const AdminPanelDeletePopup = ({ setIsDelPopupShowing }) => {
  return (
    <StyledAdmin.StyledAdminPanelDeleteContainer>

      <StyledAdmin.StyledAdminPanelDelete>

        <StyledAdmin.StyledAdminPanelDeleteContent>

          <StyledAdmin.StyledAdminPanelClose>
            <GrFormClose onClick={() => setIsDelPopupShowing(false)} />
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
  )
}

export default AdminPanelDeletePopup;