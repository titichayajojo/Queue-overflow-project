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
      </Question>
      <StyledQuestionRow>
        <QuestionStats>
          Asked
          <span>{askedDate}</span>
        </QuestionStats>
        <QuestionStats>
          Active
          <span> {askedDate}</span>
        </QuestionStats>
        <QuestionStats>
          Viewed
          <span>{views}</span>
        </QuestionStats>
      </StyledQuestionRow>
      <Border />
    </ViewQuestionHeaderRow>
  );
}

export default ViewQuestionHeader;
