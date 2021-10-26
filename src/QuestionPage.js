import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import {Link} from 'react-router-dom';

const StyledHeader = styled.h1`
  font-size: 1.8rem;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const BlueButton = styled(Link)`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 10px;
  text-decoration: none;
`;

function QuestionPage() {
  let [data, setData] = useState(null);

  useEffect(() => {
    var headers = {};
    fetch("http://127.0.0.1:8000/api/questions", {
      method: "GET",
      mode: "cors",
      headers: headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setData(jsonResponse);
      })
      .catch((error) => console.error(error, error.stack));
  }, []);

  return (
    <main>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <BlueButton to={'/AskPage'}>Ask&nbsp;Question</BlueButton>
      </HeaderRow>
      {data &&
        data.map((element, index) => {
          return <QuestionRow key={element.id} value={element} />;
        })}
    </main>
  );
}

export default QuestionPage;
