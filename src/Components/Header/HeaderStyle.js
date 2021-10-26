import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 220px 1fr 200px;
  grid-column-gap: 20px;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;
