import styled from "styled-components";

export const ContainerPhotoList = styled.div`
  width: 100%;
  max-width: 27rem;
  padding: 36px 44px;
  border-radius: 0.25rem;
  background-color: var(--whiteFixed);
`;

export const TextPhoto = styled.h2``;

export const CustomerPhotoList = styled.ul`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 14px;
`;

export const ContainerPhoto = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 4px;
  background: var(--grey7);
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
`;
