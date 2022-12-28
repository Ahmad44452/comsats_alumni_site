import * as StyledComponents from '../../Styles/Home.styled';

import { StyledButtonYellow } from "../../Styles/Button.styled";

import axios from 'axios';
import { ImLocation2, ImCalendar } from 'react-icons/im'
import { useEffect, useState } from 'react';
import useLoading from '../../hooks/useLoading';

const Home = () => {

  const [statsInfo, setStatsInfo] = useState({
    passedOut: 0,
    employed: 0,
    governmentEmployees: 0,
    seniorManagement: 0
  });
  const setGlobalLoading = useLoading();

  useEffect(() => {



    if (statsInfo.passedOut === 0) {
      (async () => {
        try {
          setGlobalLoading(true);
          const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/getstats`);

          if (res) {
            setStatsInfo(res.data);
          }

          setGlobalLoading(false);
        } catch (err) {
          console.log(err);
          setGlobalLoading(false);
        }
      })();

    }




  }, [setGlobalLoading, statsInfo])

  return (
    <>
      <StyledComponents.StyledHomeHeader>
        <StyledComponents.StyledHomeHeaderContainer>
          <h2>Welcome</h2>
          <p>
            Welcome visitors to your site with a short, engaging introduction. Double click to edit and add your own text.
          </p>
          <StyledButtonYellow to={'/login'}>Start Now</StyledButtonYellow>
        </StyledComponents.StyledHomeHeaderContainer>
      </StyledComponents.StyledHomeHeader>
      <StyledComponents.StyledHomeAbout>
        <StyledComponents.StyledHomeAboutContainer>
          <StyledComponents.StyledHomeAboutContent>
            <div>
              <h2>COMSATS Univeristy</h2>
              <h3>Sahiwal Campus</h3>
            </div>
            <p>
              Briefly introduce yourself and share something interesting with website visitors. Double click to edit the text.
            </p>
            <div>
              <StyledButtonYellow>
                About Us
              </StyledButtonYellow>
            </div>
          </StyledComponents.StyledHomeAboutContent>
          <img src='https://static.wixstatic.com/media/a3c153_100f08099c424ff79cb1d9d2c57a2aa6~mv2.jpg/v1/fill/w_552,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a3c153_100f08099c424ff79cb1d9d2c57a2aa6~mv2.jpg'
            alt='' />
        </StyledComponents.StyledHomeAboutContainer>
      </StyledComponents.StyledHomeAbout>
      <StyledComponents.StyledHomeExplore>
        <StyledComponents.StyledHomeExploreImg>

        </StyledComponents.StyledHomeExploreImg>

        <StyledComponents.StyledHomeExploreText>
          <h2>
            Explore COMSATS Aluminia
          </h2>

          <h3>
            Creating a Brighter Future
          </h3>

          <p>
            At COMSATS Aluminia, we are committed to spirited learning, growth and professional development. We empower our students to ask insightful questions,
            explore disciplinary boundaries, and confront conventional ways of thinking. We invite you to learn more about COMSATS Aluminia and discover an education
            built for you.
          </p>
        </StyledComponents.StyledHomeExploreText>
      </StyledComponents.StyledHomeExplore>

      <StyledComponents.StyledHomeAlumniNumbers>
        <h2>Number of Alumina</h2>
        <StyledComponents.StyledHomeAlumniNumbersContainer>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.passedOut) || 600}</h3>
            <p>Passed Out</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.employed) || 195}</h3>
            <p>Employed</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.governmentEmployees) || 85}</h3>
            <p>Government Employees</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.seniorManagement) || 34}</h3>
            <p>Senior Management</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

        </StyledComponents.StyledHomeAlumniNumbersContainer>
      </StyledComponents.StyledHomeAlumniNumbers>

      <StyledComponents.StyledHomeEvents>
        <h2>Upcoming Events</h2>

        <StyledComponents.StyledHomeEventsContainer>

          <StyledComponents.StyledHomeEventsBlock>
            <img src='https://static.wixstatic.com/media/a3c153_ad9134e220794c6c86289255b9382644~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsp.png'
              alt='' />
            <StyledComponents.StyledHomeEventDescription>
              <StyledComponents.StyledHomeEventInfo>
                <h3>Event Name</h3>
                <div>Write the description of event here. What the event is about and everything related to it</div>
                <p><ImLocation2 /><span>COMSATS Auditorium</span></p>
                <p><ImCalendar /><span>30 December 2022</span></p>
              </StyledComponents.StyledHomeEventInfo>

            </StyledComponents.StyledHomeEventDescription>

          </StyledComponents.StyledHomeEventsBlock>

          <StyledComponents.StyledHomeEventsBlock>
            <img src='https://static.wixstatic.com/media/a3c153_ad9134e220794c6c86289255b9382644~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsp.png'
              alt='' />
            <StyledComponents.StyledHomeEventDescription>
              <StyledComponents.StyledHomeEventInfo>
                <h3>Event Name</h3>
                <div>Write the description of event here. What the event is about and everything related to it</div>
                <p><ImLocation2 /><span>COMSATS Auditorium</span></p>
                <p><ImCalendar /><span>30 December 2022</span></p>
              </StyledComponents.StyledHomeEventInfo>

            </StyledComponents.StyledHomeEventDescription>

          </StyledComponents.StyledHomeEventsBlock>

          <StyledComponents.StyledHomeEventsBlock>
            <img src='https://static.wixstatic.com/media/a3c153_ad9134e220794c6c86289255b9382644~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsp.png'
              alt='' />

            <StyledComponents.StyledHomeEventDescription>
              <StyledComponents.StyledHomeEventInfo>
                <h3>Event Name</h3>
                <div>Write the description of event here. What the event is about and everything related to it</div>
                <p><ImLocation2 /><span>COMSATS Auditorium</span></p>
                <p><ImCalendar /><span>30 December 2022</span></p>
              </StyledComponents.StyledHomeEventInfo>

            </StyledComponents.StyledHomeEventDescription>

          </StyledComponents.StyledHomeEventsBlock>

          <StyledComponents.StyledHomeEventsBlock>
            <img src='https://static.wixstatic.com/media/a3c153_ad9134e220794c6c86289255b9382644~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsp.png'
              alt='' />
            <StyledComponents.StyledHomeEventDescription>
              <StyledComponents.StyledHomeEventInfo>
                <h3>Event Name</h3>
                <div>Write the description of event here. What the event is about and everything related to it</div>
                <p><ImLocation2 /><span>COMSATS Auditorium</span></p>
                <p><ImCalendar /><span>30 December 2022</span></p>
              </StyledComponents.StyledHomeEventInfo>

            </StyledComponents.StyledHomeEventDescription>

          </StyledComponents.StyledHomeEventsBlock>

        </StyledComponents.StyledHomeEventsContainer>

      </StyledComponents.StyledHomeEvents>
    </>

  )
};

export default Home;