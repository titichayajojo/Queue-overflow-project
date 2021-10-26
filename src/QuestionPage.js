import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import { useEffect, useState } from "react";
import TabBar from "../src/Components/Button/TabBar";
import classes from "./QuestionPage.module.css";
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom';

const StyledHeader = styled.h1`
  font-size: 1.8rem;
  margin-top: 50px;
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
<<<<<<< HEAD
  text-decoration: none;
=======
  margin-top: 50px;
>>>>>>> e10a9f36c65a76eab66adfd0282f4adc65b79955
`;

const TabBars = [{ name: "Questions" }, { name: "Tags" }, { name: "Users" }];

function QuestionPage() {
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch((error) => console.error(error, error.stack));
  }, []);

  return (
<<<<<<< HEAD
    <main>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <BlueButton to={'/AskPage'}>Ask&nbsp;Question</BlueButton>
      </HeaderRow>
      <div className={classes.questionContainer}>
        <Loader
          type="ThreeDots"
          color="white"
          height={150}
          width={150}
          visible={loading}
        />
=======
    <div>
      <div className={classes.row}>
        <div className={classes.menubar}>
          {TabBars.map((item) => {
            return <TabBar title={item.name} />;
          })}
        </div>
        <div className={classes.mainPage}>
          <HeaderRow>
            <StyledHeader>Top Questions</StyledHeader>
            <BlueButton>Ask&nbsp;Question</BlueButton>
          </HeaderRow>
          <div className={classes.questionContainer}>
            <Loader
              type="ThreeDots"
              color="white"
              height={150}
              width={150}
              visible={loading}
            />
          </div>
          {data &&
            data.map((element, index) => {
              return <QuestionRow key={element.id} value={element} />;
            })}
        </div>
>>>>>>> e10a9f36c65a76eab66adfd0282f4adc65b79955
      </div>
    </div>
  );
}

export default QuestionPage;
