import styled from "styled-components";

export const ViewQuestionHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
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
  align-self: end;
  height: 40px;
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
  align-self: start;
  margin-bottom: 30px;
  justify-content: center;
`;

export const Border = styled.div`
  border-bottom: ridge hsl(210, 4.5%, 30.5%) 0.1px;
  width: 100%;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;