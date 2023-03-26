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

export const GraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Graph = styled.div`
  margin: 3rem 0;
`;

export const GraphTitle = styled.h3`
text-align: center;
  font-size: 2rem;
`;