import styled from "styled-components";
import { FontIntegerNormal } from "../../style/fonts";

export const ContainerDetailAndCreation = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const CreationTime = styled(FontIntegerNormal)`
  margin-top: 1px;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey3);
`;

export const Div = styled.div`
  display: flex;
  gap:10px;
`;

export const ContainerCardComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputDescripition = styled.input`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

