import styled from "styled-components";

export const CustonSection = styled.section`
  padding: 40px 0 40px 12px;
  display: flex;
  flex-direction: column;
  /* gap: 40px; */

  .title {
    font-size: 24px;
    font-weight: 600;
    color: var(--grey0);
  }

  .carousel {
    cursor: grab;
    padding: 3rem 0;
    gap: 12px;
    overflow: hidden;

    .inner {
      display: flex;

      @media screen and (min-width: 768px) {
        gap: 24px;
      }

      .item {
        min-height: 200px;
        min-width: 400px;
        padding: 14px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 40px 0 40px 60px;
  }
`;

export const ListCards = styled.ul`
  padding: 3rem 0;
  display: flex;
  gap: 12px;
  overflow-x: auto;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const EmptyList = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 25px 0px;
  color: var(--brand2);
`;
