import { useHistory } from "react-router-dom";
import {
  StyledHeader,
  ViewQuestionHeaderRow,
  BlueButton,
  QuestionStats,
  StyledQuestionRow,
  Border,
  Question,
} from "./ViewQuestionHeaderStyle";

<<<<<<< HEAD
function ViewQuestionHeader() {
  return (
    <ViewQuestionHeaderRow>
      <Question>
        <StyledHeader>Testing of useEffect hook with try/catch</StyledHeader>
        <BlueButton>Ask&nbsp;Question</BlueButton>
=======
function ViewQuestionHeader(props) {
  const { title, askedDate, views } = props.value;
  const history = useHistory();

  const askQuestion = () => {
    history.push("/AskPage");
  };

  return (
    <ViewQuestionHeaderRow>
      <Question>
        <StyledHeader>{title}</StyledHeader>
        <BlueButton
          onClick={askQuestion}
          variant="contained"
          style={{
            height: 45,
            marginLeft: 5,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#378AD3",
          }}
        >
          Ask&nbsp;Question
        </BlueButton>
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
      </Question>
      <StyledQuestionRow>
        <QuestionStats>
          Asked
          <span>1 year ago</span>
        </QuestionStats>
        <QuestionStats>
          Active
          <span> 1 year ago</span>
        </QuestionStats>
        <QuestionStats>
          Viewed
          <span>6k times</span>
        </QuestionStats>
      </StyledQuestionRow>
      <Border />
    </ViewQuestionHeaderRow>
  );
}

export default ViewQuestionHeader;
