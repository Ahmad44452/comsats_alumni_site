import * as StyledPopup from '../../Styles/AdminPanelAddStudent.styled';

import { GrFormClose } from 'react-icons/gr';

const AdminPanelAddStudentPopup = ({ setIsAddPopupShowing }) => {
  return (
    <StyledPopup.StyledAdminPanelAddContainer>

      <StyledPopup.StyledAdminPanelAdd>

        <StyledPopup.StyledAdminPanelAddContent>

          <StyledPopup.StyledAdminPanelClose>
            <GrFormClose onClick={() => setIsAddPopupShowing(false)} />
          </StyledPopup.StyledAdminPanelClose>

          <StyledPopup.StyledAdminPanelAddHeading>
            Add Student
          </StyledPopup.StyledAdminPanelAddHeading>

          <StyledPopup.StyledAdminPanelAddTextInput type={'text'} placeholder='Registration no' />

          <StyledPopup.StyledAdminPanelAddTextInput type={'password'} placeholder='Password' />

          <StyledPopup.StyledAdminPanelAddSubmitInput type={'submit'} />


        </StyledPopup.StyledAdminPanelAddContent>

      </StyledPopup.StyledAdminPanelAdd>

    </StyledPopup.StyledAdminPanelAddContainer>
  )
}

export default AdminPanelAddStudentPopup;