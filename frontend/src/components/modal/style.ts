import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  top: 0;

  .card {
    width: 90%;
    max-width: 32.5rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    background-color: var(--whiteFixed);
    border-radius: 0.5rem;
    
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--grey1);

      svg {
        cursor: pointer;
        color: var(--grey4);
      }
    }
    
    .content {
      width: 100%;
      height: 100%;
      
      .children {
        max-width: 100%;
        max-height: 100%;
        
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0.5rem;
        }
      }

    }
  }
`;


export default Container;
