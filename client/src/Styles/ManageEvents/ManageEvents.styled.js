import styled from "styled-components";

export const Section = styled.div`
  min-height: 100vh;
  color: #000;
  padding: 0 3rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-family: 'oswald',sans-serif;
  font-weight: 600;
  color: #142e84;
  padding: 2rem 0 1rem 0;
`;

export const HeaderButton = styled.button`
  background-color: #fff;
  text-align: center;
  border: 1px solid #142e84;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #142e84;
  transition: all .3s;

  &:hover{
    background-color: #162b6f;
    color: #fff;
  }
`;

export const EventsContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-content: center;
  align-items: center;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export const EventsBlock = styled.div`
  background-color: #2243ae;
  display: flex;
  /* width: 65rem; */
  height: 28rem;

  img{
    width: 50%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    flex: 1 1 50%;
  }
`;

export const EventDescription = styled.div`
  flex: 1 1 50%;
  padding: 3rem 2rem;
  color: white;
`;

export const EventInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  
  h3{
    font-size: 3rem;
  }

  div{
    font-size: 1.8rem;
    font-weight: 300;
    
  }

  span{
    p{
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 300;

    &:not(:last-child){
      margin-bottom: 2px;
    }
    

    span{
      margin-left: .6rem;
    }
  }
  }

  
`;


export const EventDeleteButton = styled.button`
  position: absolute;
  top: 7px;
  right: 2px;
  background-color: transparent;
  line-height: 0;
  border-radius: 2px;
  border: 1px solid red;
  outline: none;
  cursor: pointer;
  padding: .2rem;

  svg{
    width: 2rem;
    height: 2rem;
    color: red;
  }

  &:hover{
    background-color: red;
    
    svg{
      color: #fff;
    }
  }
`;

export const DeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  height: 100vh;
  width: 100vw;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Delete = styled.div`
  
`;

export const DeleteContent = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 3px;
  padding: 3rem 7rem;
`;


export const DeleteClose = styled.div`
  position: absolute;
  right: 2px;
  top: 0;

  svg{
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:hover{

      path{
        stroke: red;
      }
      
    }
  }
`;

export const DeleteText = styled.div`
  font-size: 2rem;
  /* margin: 1rem 0 4rem 0; */
`;

export const DeleteErrorText = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 0;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
`;

export const DeleteButton = styled.button`
  outline: none;
  border: none;
  flex-grow: 1;
  padding: 1rem 0;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ color }) => color};
  border: ${({ color }) => `1px solid ${color};`};
  text-transform: uppercase;
  border-radius: 5px;

  &:hover{
    background-color:  ${({ color }) => color};
    color: #fff;
  }

  &:not(:last-child){
    margin-right: 10px;
  }
`;