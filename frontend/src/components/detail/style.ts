import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  
  .logo {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--random1);
    border-radius: 50%;
    color: var(--whiteFixed);
  }
  
  p {
    color: var(--grey2);
  }

`;


export default Container;
