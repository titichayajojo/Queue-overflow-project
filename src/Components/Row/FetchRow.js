import styled from "styled-components";

import { BlueButton } from "../Header/ViewQuestionHeaderStyle";
import ViewQuestionHeader from "../Header/ViewQuestionHeader";
import VoteRow from "../Row/VoteRow";
import TagsRow from "../Row/TagsRow";
import ProfileRow from "../Row/ProfileRow";
import AnswersRow from "../Row/AnswersRow";

const TotalAnswers = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-right: 660px;
  font-size: 1.2rem;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const YourAnswer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-right: 660px;
  font-size: 1.2rem;
  padding-bottom: 50px;
  padding-top: 20px;
`;

const AnswerInput = styled.input`
  display: grid;
  box-sizing: border-box;
  width: 600px;
  border-radius: 3px;
  border: 1px solid #777;
  padding: 100px;
  margin-right: 180px;
`;

const AnswerInputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerButtonRow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 660px;
`;

function FetchRow(props) {

  return (
    <div>
      <ViewQuestionHeader value={props.value}/>
      <VoteRow value={props.value}/>
      <TagsRow value={props.value}/>
      <ProfileRow value={props.value}/>
      <TotalAnswers>{props.value.answers} Answers</TotalAnswers>
      <AnswersRow />
      <AnswersRow />
      <YourAnswer>Your Answer</YourAnswer>
      <AnswerInputRow>
        <AnswerInput></AnswerInput>
      </AnswerInputRow>
      <AnswerButtonRow>
        <BlueButton>Post&nbsp;Your&nbsp;Answer</BlueButton>
      </AnswerButtonRow>
    </div>
  );
}

export default FetchRow;
