import styled from "styled-components";
import Header from "../Components/Header/Header";
import VoteRow from "../Components/Row/VoteRow";
import TagsRow from "../Components/Row/TagsRow";
import ProfileRow from "../Components/Row/ProfileRow";
import AnswersRow from "../Components/Row/AnswersRow";
import { BlueButton } from "../Components/Header/ViewQuestionHeaderStyle";
import ViewQuestionHeader from "../Components/Header/ViewQuestionHeader";
import { useParams } from "react-router-dom";

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

export const BodyDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Border = styled.div`
  border-bottom: ridge hsl(210, 4.5%, 30.5%) 0.1px;
  width: 50vw;
`;

function ViewQuestionPage() {
  let params = useParams();
  console.log(params.item)
  return (
    <div>
      <Header />
      <BodyDiv>
        <ViewQuestionHeader />
        <VoteRow />
        <TagsRow />
        <ProfileRow />
        <TotalAnswers>2 Answers</TotalAnswers>
        <AnswersRow />
        <AnswersRow />
        <YourAnswer>Your Answer</YourAnswer>
        <AnswerInputRow>
          <AnswerInput></AnswerInput>
        </AnswerInputRow>
        <AnswerButtonRow>
          <BlueButton>Post&nbsp;Your&nbsp;Answer</BlueButton>
        </AnswerButtonRow>
      </BodyDiv>
    </div>
  );
}

export default ViewQuestionPage;
