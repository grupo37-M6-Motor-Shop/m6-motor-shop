import styled from "styled-components";

export const FontIntegerNormal = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey2);
`;

export const FontIntegerLight = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey3);
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
