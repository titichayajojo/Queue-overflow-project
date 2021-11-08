import styled from "styled-components";

import { BlueButton } from "../Header/ViewQuestionHeaderStyle";
import ViewQuestionHeader from "../Header/ViewQuestionHeader";
import VoteRow from "../Row/VoteRow";
import TagsRow from "../Row/TagsRow";
import ProfileRow from "../Row/ProfileRow";
import AnswersRow from "../Row/AnswersRow";
import { useEffect, useState } from "react";
import RichTextEditor from "../Input/RichTextEditor"

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
  const [text, setText] = useState(null);
  const params = props.params;

  return (
    props.data != null && (
      <div>
        <ViewQuestionHeader value={props.value} />
        <VoteRow value={props.value} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TagsRow value={props.value} />
        </div>
        <ProfileRow value={props.value} />
        <TotalAnswers>{Object.keys(props.data).length} Answers</TotalAnswers>
        {props.data.map((element, index) => {
          return <AnswersRow key={element.id} value={element} />;
        })}

        <YourAnswer>Your Answer</YourAnswer>
        <AnswerInputRow>
          <RichTextEditor setText={setText}></RichTextEditor>
        </AnswerInputRow>
        <AnswerButtonRow>
          <BlueButton>Post&nbsp;Your&nbsp;Answer</BlueButton>
        </AnswerButtonRow>
      </div>
    )
  );
}

export default FetchRow;
