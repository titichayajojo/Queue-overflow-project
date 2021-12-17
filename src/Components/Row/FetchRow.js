import styled from "styled-components";
import { useSelector } from "react-redux";
import { BlueButton } from "../Header/ViewQuestionHeaderStyle";
import ViewQuestionHeader from "../Header/ViewQuestionHeader";
import VoteRow from "../Row/VoteRow";
import TagsRow from "../Row/TagsRow";
import ProfileRow from "../Row/ProfileRow";
import AnswersRow from "../Row/AnswersRow";
import { useEffect, useState } from "react";
import RichTextEditor from "../Input/RichTextEditor";
import { Link, useHistory, useLocation } from "react-router-dom";

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
  const history = useHistory();
  const counter = useSelector((state) => state.counter.token);
  const [text, setText] = useState(null);
  const params = props.params;

  function postAnswer(id, body, setState, state, token) {
    if (token == "") {
      history.push("/LoginPage");
    } else {
      var headers = { Authorization: token };
      fetch("http://127.0.0.1:8000/api/answers", {
        method: "POST",
        mode: "cors",
        headers: headers,
        body: JSON.stringify({ questionId: id, body: body }),
      })
        .then((res) => {
          setState(!state);
          return res.json();
        })
        .then((jsonResponse) => {
          console.log(jsonResponse);
        });
    }
  }
  return (
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
        <BlueButton
          onClick={async () => {
            postAnswer(params, text, props.setState, props.state, counter);
          }}
          variant="contained"
          style={{
            height: 45,
            marginLeft: 5,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#378AD3",
          }}
        >
          Post&nbsp;Your&nbsp;Answer
        </BlueButton>
      </AnswerButtonRow>
    </div>
  );
}

export default FetchRow;
