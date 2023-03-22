import * as Dashboard from '../../Styles/Dashboard/Dashboard.Styled';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { signOutAdmin } from '../../store/slices/adminSlice';
import { useSelector } from 'react-redux';

import SubmittedDetails from "../SubmittedDetails";
import PeopleContacted from '../PeopleContacted';
import GalleryManager from '../GalleryManager';
import AddData from '../AddData';
import ManageHOD from '../ManageHOD';
import ManageAdmins from '../ManageAdmins';
import ManageEvents from '../ManageEvents';


const AdminDashboard = () => {

  const adminRole = useSelector(state => state.adminSlice.data.role);
  const dispatch = useDispatch();
  const [visibleComponent, setVisibleComponent] = useState('Alumni')

  const logOut = (e) => {
    e.preventDefault();
    dispatch(signOutAdmin());
  }

  return (
    <>
      <Dashboard.Container>
        <Dashboard.Navigation>
          <Dashboard.NavigationButton>
            Graphs
          </Dashboard.NavigationButton>
          <Dashboard.NavigationButton onClick={() => setVisibleComponent('Alumni')}>
            Alumni Detail
          </Dashboard.NavigationButton>
          <Dashboard.NavigationButton onClick={() => setVisibleComponent('Contacted')}>
            Contact Detail
          </Dashboard.NavigationButton>
          <Dashboard.NavigationButton onClick={() => setVisibleComponent('Gallery')}>
            Manage Gallery
          </Dashboard.NavigationButton>
          <Dashboard.NavigationButton onClick={() => setVisibleComponent('ManageEvents')}>
            Manage Events
          </Dashboard.NavigationButton>

          {
            adminRole === 'Developer' || adminRole === 'Admin' ? <Dashboard.NavigationButton onClick={() => setVisibleComponent('AddData')}>
              Add To DB
            </Dashboard.NavigationButton> : null
          }

          {
            adminRole === 'Developer' || adminRole === 'Admin' ? <Dashboard.NavigationButton onClick={() => setVisibleComponent('ManageHOD')}>
              Manage HODs
            </Dashboard.NavigationButton> : null
          }

          {
            adminRole === 'Developer' ? <Dashboard.NavigationButton onClick={() => setVisibleComponent('ManageAdmins')}>
              Manage Admins
            </Dashboard.NavigationButton> : null
          }
          <Dashboard.Divider />
          <Dashboard.NavigationButton onClick={logOut}>
            Log Out
          </Dashboard.NavigationButton>
        </Dashboard.Navigation>

        <Dashboard.Content>
          {
            visibleComponent === 'Alumni' ? <SubmittedDetails /> : null
          }

          {
            visibleComponent === 'Contacted' ? <PeopleContacted /> : null
          }

          {
            visibleComponent === 'Gallery' ? <GalleryManager /> : null
          }

          {
            visibleComponent === 'AddData' ? <AddData /> : null
          }

          {
            visibleComponent === 'ManageHOD' ? <ManageHOD /> : null
          }

          {
            visibleComponent === 'ManageAdmins' ? <ManageAdmins /> : null
          }

          {
            visibleComponent === 'ManageEvents' ? <ManageEvents /> : null
          }

        </Dashboard.Content>
      </Dashboard.Container>

    </>

  )
}

export default AdminDashboard;