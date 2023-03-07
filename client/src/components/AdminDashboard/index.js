import * as Dashboard from '../../Styles/Dashboard/Dashboard.Styled';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { signOutAdmin } from '../../store/slices/adminSlice';

import SubmittedDetails from "../SubmittedDetails";
import PeopleContacted from '../PeopleContacted';
import GalleryManager from '../GalleryManager';


const AdminDashboard = () => {

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

        </Dashboard.Content>
      </Dashboard.Container>

    </>

  )
}

export default AdminDashboard;