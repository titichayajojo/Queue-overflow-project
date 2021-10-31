import styled from "styled-components";
import TagPage from "../src/Container/TagPage";
import QuestionRow from "./QuestionRow";
import { useEffect, useState } from "react";
import TabBar from "../src/Components/Button/TabBar";
import classes from "./QuestionPage.module.css";
import Loader from "react-loader-spinner";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faPizzaSlice,
  faTags,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

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
  text-decoration: none;
  margin-top: 50px;
`;

const TabBars = [{ name: "Questions" }, { name: "Tags" }, { name: "Users" }];

function QuestionPage() {
  const history = useHistory();
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const curButton = queryParams.get("choice");

  const SubPage = () => {
    switch (curButton) {
      case "Tags":
        return <TagPage />;
      default:
        return <div />;
    }
  };

  useEffect(() => {
    history.push("/feature?choice=" + "Questions");
  }, []);
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
    <div>
      <div className={classes.row}>
        <div className={classes.menubar}>
          <div
            className={classes.heading1}
            style={{ marginTop: 40, marginLeft: 40 }}
          >
            Home
          </div>
          <div
            className={classes.heading1}
            style={{ marginTop: 40, marginLeft: 40 }}
          >
            PUBLIC
          </div>
          <div
            className={classes.row}
            style={{ marginTop: 40, alignItems: "center" }}
          >
            <FontAwesomeIcon
              icon={faTags}
              size="1x"
              color={"white"}
              style={{ margin: 10 }}
            />
            <div className={classes.heading1} style={{}}>
              Stack Overflow
            </div>
          </div>

          {TabBars.map((item) => {
            return <TabBar title={item.name} />;
          })}
        </div>

        <div className={classes.mainPage} style={{}}>
          <Loader
            style={{
              position: "absolute",
              marginLeft: "35%",
              marginTop: "10%",
            }}
            type="ThreeDots"
            color="white"
            height={150}
            width={150}
            visible={loading}
          />

          {data != null && curButton === "Questions" && (
            <HeaderRow>
              <StyledHeader>Top Questions</StyledHeader>
              <BlueButton to={"/AskPage"}>Ask&nbsp;Question</BlueButton>
            </HeaderRow>
          )}
          <div style={{}}>
            {data != null &&
              curButton === "Questions" &&
              data.map((element, index) => {
                return <QuestionRow key={element.id} value={element} />;
              })}
            <div
              style={{
                width: "100%",
              }}
            >
              {SubPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
