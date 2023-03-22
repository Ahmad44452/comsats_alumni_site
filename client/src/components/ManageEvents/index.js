import * as Styled from '../../Styles/ManageEvents/ManageEvents.styled';
import { useCallback } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImLocation2, ImCalendar } from 'react-icons/im';

import AddEventPopUp from './AddEventPopUp';
import useLoading from '../../hooks/useLoading';
import DeleteEventPopup from './DeleteEventPopup';


const ManageEvents = () => {

  const [isAddPopupShowing, setIsAddPopupShowing] = useState(false);
  const [events, setEvents] = useState(null);
  const setGlobalLoading = useLoading();

  const [isDelPopupShowing, setIsDelPopupShowing] = useState(false);
  const [delEventObjId, setDelEventObjId] = useState(null);

  const fetchEvents = useCallback(async () => {
    try {
      setGlobalLoading(true);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/img/getevents`);

      if (res.data) {
        setEvents(res.data);
      }

      setGlobalLoading(false);
    } catch (err) {
      console.log(err);
      setGlobalLoading(false);
    }
  }, [setGlobalLoading]);

  useEffect(() => {

    if (!events) {
      fetchEvents();
    }

  }, [setGlobalLoading, fetchEvents, events])

  return (
    <Styled.Section>
      {
        isAddPopupShowing ? <AddEventPopUp setIsAddPopupShowing={setIsAddPopupShowing} fetchEvents={fetchEvents} /> : null
      }

      {
        isDelPopupShowing && <DeleteEventPopup setIsDelPopupShowing={setIsDelPopupShowing} setDelEventObjId={setDelEventObjId} delEventObjId={delEventObjId} fetchEvents={fetchEvents} />
      }

      <Styled.Header>
        <Styled.Heading>Manage Events</Styled.Heading>
        <Styled.HeaderButton onClick={() => setIsAddPopupShowing(true)}>Add Event</Styled.HeaderButton>
      </Styled.Header>

      <Styled.EventsContainer>
        {
          events && events.map(event => (
            <Styled.EventsBlock key={event._id}>
              <img src={event.image} alt='' />
              <Styled.EventDescription>
                <Styled.EventInfo>
                  <Styled.EventDeleteButton onClick={() => { setDelEventObjId(event._id); setIsDelPopupShowing(true); }}>
                    <RiDeleteBin6Line />
                  </Styled.EventDeleteButton>
                  <h3>{event.name}</h3>
                  <div>{event.description}</div>
                  <span>
                    <p><ImLocation2 /><span>{event.location}</span></p>
                    <p><ImCalendar /><span>{event.timing}</span></p>
                  </span>

                </Styled.EventInfo>

              </Styled.EventDescription>

            </Styled.EventsBlock>
          ))
        }


      </Styled.EventsContainer>
    </Styled.Section>
  )
}

export default ManageEvents;