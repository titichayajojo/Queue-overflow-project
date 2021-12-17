import styled from "styled-components";
import { Link } from "react-router-dom";

export const WriterRow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-left: 570px;
  padding-bottom: 30px;
`;

export const Border = styled.div`
  border-bottom: ridge hsl(210, 4.5%, 30.5%) 0.1px;
  border-bottom-height: 20px;
`;

export const Writer = styled.div`
  width: 190px;
  height: 67px;
  background-color: hsl(206, 46%, 30%);
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const AskedDate = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  color: hsl(210deg 8% 70%);
  font-size: 0.8rem;
`;

export const WriterName = styled(Link)`
  padding-left: 10px;
  font-size: 0.8rem;
  color: hsl(206deg 100% 60%);
`;
