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
  const {title, askedDate, views} = props.value

  return (
    <ViewQuestionHeaderRow>
      <Question>
        <StyledHeader>{title}</StyledHeader>
        <BlueButton>Ask&nbsp;Question</BlueButton>
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
