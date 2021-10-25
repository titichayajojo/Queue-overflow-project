import styled from "styled-components";

export const ViewQuestionHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px;
  text-align: center;
`;

export const StyledHeader = styled.div`
  font-size: 1.7rem;
  color: hsl(210, 8%, 82.5%);
`;

export const BlueButton = styled.button`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
`;

export const QuestionStats = styled.span`
  padding: 0px 5px;
  color: hsl(210, 8%, 65%);
  font-size: 0.8rem;
  span {
    padding: 0px 5px;
    color: hsl(210, 8%, 82.5%);
  }
`;

export const StyledQuestionRow = styled.span`
  border-bottom: ridge hsl(210, 4.5%, 30.5%) 0.1px;
  margin-right: 130px;
  padding-bottom: 20px;
`;