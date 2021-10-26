import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 30px 20px;
`;

const BlueButton = styled.button`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  display: block;
  height: 50px;
  width: 150px;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledHeader = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const StyledHeader2 = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const TipLabel = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const QuestionTitleInput = styled.input`
  color: #ffff;
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
`;

const QuestionBodyText = styled.textarea`
  color: #ffff;
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  margin-bottom: 20px;
`;
function AskPage() {
  return (
    <div>
      <Container style={{}}>
        <StyledHeader style={{ marginTop: 50 }}>
          Ask a public question
        </StyledHeader>
        <StyledHeader2>Title</StyledHeader2>
        <TipLabel>
          Be specific and imagine you’re asking a question to another person
        </TipLabel>
        <QuestionTitleInput
          type="text"
          placeholder="Title of your question"
        ></QuestionTitleInput>
        <StyledHeader2>Body</StyledHeader2>
        <TipLabel>
          Include all the information someone would need to answer your question
        </TipLabel>
        <QuestionBodyText placeholder="Question"></QuestionBodyText>
        <BlueButton>Upload image</BlueButton>
        <StyledHeader2>Tags</StyledHeader2>
        <TipLabel>
          Add up to 5 tags to describe what your question is about
        </TipLabel>
        <QuestionTitleInput
          type="text"
          placeholder="e.g.(python html css)"
        ></QuestionTitleInput>
        <BlueButton>Post your question</BlueButton>
      </Container>
    </div>
  );
}
export default AskPage;
