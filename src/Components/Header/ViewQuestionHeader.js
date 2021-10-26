import {
  StyledHeader,
  ViewQuestionHeaderRow,
  BlueButton,
  QuestionStats,
  StyledQuestionRow,
  Border,
  Question,
} from "./ViewQuestionHeaderStyle";

function ViewQuestionHeader() {
  return (
    <ViewQuestionHeaderRow>
      <Question>
        <StyledHeader>Testing of useEffect hook with try/catch</StyledHeader>
        <BlueButton>Ask&nbsp;Question</BlueButton>
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
