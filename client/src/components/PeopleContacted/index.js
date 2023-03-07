import * as Contacted from '../../Styles/PeopleContacted/PeopleContacted.styled'
import { loadAllPeopleContactedApi } from '../../store/api/adminApi';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEye } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri'

import PeopleContactedDeletePopup from './PeopleContactedDeletePopup';
import PeopleContactedShowDetails from './PeopleContactedShowDetails'


const PeopleContacted = () => {

  const peopleContactedSlice = useSelector(state => state.peopleContactedSlice);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delUserObjId, setDelUserObjId] = useState(null);

  const [isShowInfoPopupShowing, setShowInfoPopupShowing] = useState(false);
  const [showInfoObjId, setShowInfoObjId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (peopleContactedSlice && peopleContactedSlice.data === null) {
      dispatch(loadAllPeopleContactedApi());
    }
  }, [dispatch, peopleContactedSlice]);

  return (
    <Contacted.Container>
      <Contacted.Header>
        <Contacted.Heading>
          People Contacted
        </Contacted.Heading>
      </Contacted.Header>

      <Contacted.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>

          {
            peopleContactedSlice.data && peopleContactedSlice.data.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Contacted.TableSvg hoverColor={'red'} onClick={() => { setDelUserObjId(item._id); setIsDelPopupShowing(true); }}>
                    <RiDeleteBin6Line />
                  </Contacted.TableSvg>

                  <Contacted.TableSvg hoverColor={'#227C70'} onClick={() => { setShowInfoObjId(item._id); setShowInfoPopupShowing(true); }}>
                    <AiFillEye />
                  </Contacted.TableSvg>
                </td>
              </tr>
            ))
          }

        </tbody>
      </Contacted.Table>

      {
        isDelPopupShowing && <PeopleContactedDeletePopup setIsDelPopupShowing={setIsDelPopupShowing} setDelUserObjId={setDelUserObjId} delUserObjId={delUserObjId} />
      }

      {
        isShowInfoPopupShowing && <PeopleContactedShowDetails setShowInfoPopupShowing={setShowInfoPopupShowing} setShowInfoObjId={setShowInfoObjId} showInfoObjId={showInfoObjId} />
      }

    </Contacted.Container>
  )
}

export default PeopleContacted;