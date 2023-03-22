import * as Styled from '../../Styles/ManageAdmins/ManageAdmins.styled';
import { useState, useEffect } from 'react'
import useLoading from '../../hooks/useLoading';
import AddAdminPopup from './AddAdminPopup';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AdminDeletePopup from './DeletePopup';

const ManageAdmins = () => {

  // const hodsInfo = useSelector(state => state.userSlice);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delUserObjId, setDelUserObjId] = useState(null);

  const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const [adminsInfo, setAdminsInfo] = useState(null);
  // const [isShowInfoPopupShowing, setShowInfoPopupShowing] = useState(false);
  // const [showInfoObjId, setShowInfoObjId] = useState(null);

  const setGlobalLoading = useLoading();
  // const dispatch = useDispatch();

  const fetchAdmins = async () => {

    try {
      setGlobalLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/getadmins`);
      setAdminsInfo(res.data);
      setGlobalLoading(false);

    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {

    if (adminsInfo === null) {
      fetchAdmins();
    }

  }, [adminsInfo, fetchAdmins]);

  return (
    (
      <Styled.Section>

        <Styled.Header>
          <Styled.Heading>
            Manage Admins
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
              adminsInfo && adminsInfo.map(admin => (
                <tr key={admin._id}>
                  <td>{admin.email}</td>
                  <td>{admin.name}</td>
                  <td>{admin.password}</td>
                  <td>
                    <Styled.TableSvg hoverColor={'red'} onClick={() => { setDelUserObjId(admin._id); setIsDelPopupShowing(true); }}>
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
          isAddPopupShowing && (<AddAdminPopup setIsAddPopupShowing={setIsAddPopupShowing} fetchAdmins={fetchAdmins} />)
        }

        {
          isDelPopupShowing && <AdminDeletePopup setIsDelPopupShowing={setIsDelPopupShowing} setDelUserObjId={setDelUserObjId} delUserObjId={delUserObjId} fetchAdmins={fetchAdmins} />
        }



      </Styled.Section>
    )
  )

}

export default ManageAdmins;