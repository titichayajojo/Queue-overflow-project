import styled from "styled-components";
import RichTextEditor from "../Components/Input/RichTextEditor";
import TagsInput from "../Components/Input/TagsInput";
import { convertFromRaw, convertToRaw } from "draft-js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Container = styled.div`
  padding: 30px 20px;
`;

const BlueButton = styled.button`
  font-size: 1rem;
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  display: block;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px 10px;
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

async function postQuestion(body, tags) {
  console.log(body);
  console.log(tags);
  var title = document.getElementById("inTitle").value;
  var headers = { Authorization: "4ac201a63372eb50e301263ceeaacbb83c762f78" };
  await fetch("http://127.0.0.1:8000/api/questions", {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify({ title: title, body: body, tags: tags }),
  })
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
      window.location.replace("/HomePage");
    });
}

function AskPage() {
  const [text, setText] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null); 

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
          id="inTitle"
          type="text"
          placeholder="Title of your question"
        ></QuestionTitleInput>
        <StyledHeader2>Body</StyledHeader2>
        <TipLabel>
          Include all the information someone would need to answer your question
        </TipLabel>
        <RichTextEditor setText={setText}></RichTextEditor>
        <BlueButton>Upload image</BlueButton>
        <StyledHeader2>Tags</StyledHeader2>
        <TipLabel>
          Add up to 5 tags to describe what your question is about
        </TipLabel>
        <TagsInput setSelectedTags={setSelectedTags}></TagsInput>
        <BlueButton
          onClick={async () => {
            await postQuestion(text, selectedTags);
          }}
        >
          Post your question
        </BlueButton>
      </Container>
    </div>
  );
}
export default AskPage;
