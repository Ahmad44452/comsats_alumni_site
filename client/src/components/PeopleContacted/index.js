import * as Contacted from '../../Styles/PeopleContacted/PeopleContacted.styled'
import { loadAllPeopleContactedApi } from '../../store/api/adminApi';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEye } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri'

import { StyledLoadMoreButton } from '../../Styles/Button.styled';

import PeopleContactedDeletePopup from './PeopleContactedDeletePopup';
import PeopleContactedShowDetails from './PeopleContactedShowDetails';
import useLoading from '../../hooks/useLoading';


const PeopleContacted = () => {

  const peopleContactedSlice = useSelector(state => state.peopleContactedSlice);
  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delUserObjId, setDelUserObjId] = useState(null);

  const [isShowInfoPopupShowing, setShowInfoPopupShowing] = useState(false);
  const [showInfoObjId, setShowInfoObjId] = useState(null);

  const setGlobalLoading = useLoading();

  const dispatch = useDispatch();

  const fetchPeopleContacted = (pageNo) => {
    setGlobalLoading(true);
    dispatch(loadAllPeopleContactedApi(pageNo)).then(() => setGlobalLoading(false))
  }

  useEffect(() => {
    if (peopleContactedSlice && peopleContactedSlice.data === null) {
      fetchPeopleContacted(1)
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
            peopleContactedSlice && peopleContactedSlice.data && peopleContactedSlice.data.docs.map(item => (
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
        peopleContactedSlice && peopleContactedSlice.data && peopleContactedSlice.data.hasNextPage && <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <StyledLoadMoreButton onClick={() => fetchPeopleContacted(peopleContactedSlice.data.page + 1)}>Load More</StyledLoadMoreButton>
        </div>
      }




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