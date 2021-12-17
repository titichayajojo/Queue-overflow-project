import styled from "styled-components";
<<<<<<< HEAD
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";
=======
import RichTextEditor from "../Components/Input/RichTextEditor";
import TagsInput from "../Components/Input/TagsInput";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051

const Container = styled.div`
  padding: 30px 20px;
`;

<<<<<<< HEAD
const BlueButton = styled.button`
=======
const BlueButton = styled(Button)`
  font-size: 1rem;
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
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
<<<<<<< HEAD
function AskPage() {
=======

async function postQuestion(body, tags, token, history) {
  var title = document.getElementById("inTitle").value;
  var headers = { Authorization: token };
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
      history.push("/HomePage");
    });
}

function AskPage() {
  const history = useHistory();
  const counter = useSelector((state) => state.counter.token);
  const [text, setText] = useState(null);
  const [selectedTags, setSelectedTags] = useState(null);

>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
  return (
    <div>
      <Header />
      <Container>
        <StyledHeader>Ask a public question</StyledHeader>
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
<<<<<<< HEAD
        <QuestionBodyText placeholder="Question"></QuestionBodyText>
        <BlueButton>Upload image</BlueButton>
=======
        <RichTextEditor setText={setText}></RichTextEditor>
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
        <StyledHeader2>Tags</StyledHeader2>
        <TipLabel>
          Add up to 5 tags to describe what your question is about
        </TipLabel>
<<<<<<< HEAD
        <QuestionTitleInput
          type="text"
          placeholder="e.g.(python html css)"
        ></QuestionTitleInput>
        <BlueButton>Post your question</BlueButton>
=======
        <TagsInput setSelectedTags={setSelectedTags}></TagsInput>
        <BlueButton
          onClick={async () => {
            await postQuestion(text, selectedTags, counter, history);
          }}
          variant="contained"
          style={{
            height: 45,
            marginLeft: 5,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: "#378AD3",
          }}
        >
          Post your question
        </BlueButton>
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
      </Container>
    </div>
  );
}
export default AskPage;
