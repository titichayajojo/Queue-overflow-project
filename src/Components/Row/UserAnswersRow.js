import styled from "styled-components";
import { Link } from "react-router-dom";
import { Editor, EditorState, convertFromRaw } from "draft-js";

const AnswerStat = styled.div`
  text-align: center;
  font-size: 1.2rem;
  display: inline-block;
  color: #aaa;
  margin-top: 7px;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;

const AnswerBody = styled.div`
  width: 500px;
  padding: 0px 30px;
  font-size: small;
  margin-left: 100px;
`;

const QuestionLink = styled(Link)`
  display: inline-block;
  color: #3ca4ff;
  font-size: 0.8rem;
  width: 100px;
  margin-left: 500px;
  padding-top: 10px;
`;

const StyledQuestionRow = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;

function UserAnswersRow(props) {
  const value = props.value;
  const contentState = convertFromRaw(value.body);
  const editorState = EditorState.createWithContent(contentState);

  return (
    <StyledQuestionRow>
      <AnswerStat>
        {value.votes}
        <span>votes</span>
      </AnswerStat>
      <AnswerBody>
        <Editor editorState={editorState} readOnly={true}></Editor>
      </AnswerBody>
      <QuestionLink to={"/ViewQuestionPage/" + value.questionId}>
        Go to question
      </QuestionLink>
    </StyledQuestionRow>
  );
}

export default UserAnswersRow;
