import { 
    StyledHeader, 
    ViewQuestionHeaderRow,
    BlueButton,
    QuestionStats,
    StyledQuestionRow
 } from "./ViewQuestionHeaderStyle"

function ViewQuestionHeader() {
    return (
        <ViewQuestionHeaderRow>
        <StyledHeader>Testing of useEffect hook with try/catch</StyledHeader>
        <BlueButton>Ask&nbsp;Question</BlueButton>
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
      </ViewQuestionHeaderRow>
    );
}

export default ViewQuestionHeader;