import styled from "styled-components";

export const StyledHomeHeader = styled.div`
  min-height: 80vh;
  background-image: url(https://static.wixstatic.com/media/a3c153_3592f141741849e8b2cb99afa8e3a412~mv2.jpg/v1/fill/w_1161,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_3592f141741849e8b2cb99afa8e3a412~mv2.jpg);
  background-size: cover;
  background-color: #162b6f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHomeHeaderContainer = styled.div`
  background-color: #162b6f;
  text-align: center;
  width: 60rem;
  padding: 8rem;

  h2{
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 5rem;
    font-family: 'Oswald',sans-serif;
  }

  p{
    font-size: 1.8rem;
    margin: 2rem 0 5rem 0;
  }

`;

export const StyledHomeAbout = styled.div`
  /* display: flex;
  align-items:center;
  justify-content: center; */
  background-color: #2243ae;
  padding: 5rem;
`

export const StyledHomeAboutContainer = styled.div`
  background-color: #162b6f;
  display: flex;
  justify-content: space-between;
`

export const StyledHomeAboutContent = styled.div`
  flex-grow: 1;
  padding: 6rem 26rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2{
    font-family: 'Oswald',sans-serif;
    font-size: 5.6rem;
  }

  h3{
    font-family: 'Oswald',sans-serif;
    font-size: 3rem;
  }

  p{
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  div{
    margin-bottom: 2rem;
  }
`

export const StyledHomeExplore = styled.div`
  background-color: #142e84;
  display: flex;
  height: 80rem;
`

export const StyledHomeExploreImg = styled.div`
  background-image: url('https://static.wixstatic.com/media/11062b_249d2c048677471d814256f756daf17e~mv2_d_8192_5462_s_4_2.jpg/v1/fill/w_904,h_760,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_249d2c048677471d814256f756daf17e~mv2_d_8192_5462_s_4_2.jpg');
  background-size: cover;
  flex: 1 1 50%;
`

export const StyledHomeExploreText = styled.div`
  flex: 1 1 50%;
  padding: 12rem 22rem;
  font-family: 'Oswald',sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2{
    font-size: 7.5rem;
    line-height: 1.3;
    margin-top: 2rem;
  }
  h3{
    font-size: 2.5rem;
    font-weight: 300;
  }
  p{
    font-size: 1.8rem;
    text-align: justify;
    font-weight: 200;
    margin-bottom: 2rem;
  }
`

export const StyledHomeAlumniNumbers = styled.div`
  background-color: #2243ae;
  padding: 10rem 0 15rem 0;
  font-family: 'Oswald',sans-serif;
  h2{
    text-align: center;
    font-size: 4rem;
  }
`

export const StyledHomeAlumniNumbersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 8rem;
`

export const StyledHomeAlumniNumbersBlock = styled.div`
  text-align: center;
  font-family: 'Oswald',sans-serif;
  h3{
    font-size: 8rem;
    line-height: 1.1;
  }

  p{
    font-size: 1.6rem;
    font-weight: 300;
  }
`

export const StyledHomeEvents = styled.div`
  background-color: #162b6f;
  padding: 5rem 0;
  h2{
    font-family: 'Oswald',sans-serif;
    text-align: center;
    font-size: 6rem;
  }
`

export const StyledHomeEventsContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2,65rem);
  justify-content: center;
  align-items: center;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export const StyledHomeEventsBlock = styled.div`
  background-color: #2243ae;
  display: flex;
  width: 65rem;
  height: 28rem;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    flex: 1 1 50%;
  }
`;

export const StyledHomeEventDescription = styled.div`
  flex: 1 1 50%;
  padding: 3rem 2rem;
`;

export const StyledHomeEventInfo = styled.div`
  h3{
    font-size: 3rem;
  }

  div{
    font-size: 1.8rem;
    font-weight: 300;
    margin: 3.5rem 0;
  }

  p{
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 300;
    margin-top: .8rem;

    span{
      margin-left: .6rem;
    }
  }
`;

