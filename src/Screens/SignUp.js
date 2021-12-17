import classes from "./SignUpPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  faComment,
  faPizzaSlice,
  faTags,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import NormalButton from "../Components/Button/NormalButton";
import TextInput from "../Components/Input/TextInput";
import Button from "@mui/material/Button";
import { Password } from "@mui/icons-material";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
//Register case
import { useHistory } from "react-router-dom";
const features = [
  {
    titile: "Get unstuck — ask a question",
    icon: faComment,
  },
  {
    titile: "Unlock new privileges like voting and commenting",
    icon: faPizzaSlice,
  },
  {
    titile: "Save your favorite tags, filters, and jobs",
    icon: faTags,
  },
  {
    titile: "Earn reputation and badges",
    icon: faTrophy,
  },
];
const buttons = [
  {
    name: "Log in with Google",
    style: { background: "#FFFFFF" },
    fontColor: "black",
  },
  {
    name: "Log in with GitHub",
    style: { background: "#2F3337" },
    fontColor: "white",
  },
  {
    name: "Log in with Facebook",
    style: { background: "#385499" },
    fontColor: "white",
  },
];

const SignUp = (props) => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const registerHandler = (props) => {
    var headers = {};
    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        setLoading(false);
        if (jsonResponse) {
          alert("Register successfully");
          history.push("/LoginPage");
        } else {
          alert("please check your email and password and try again or plesae");
        }
      })
      .catch((error) => console.error(error, error.stack));
  };
  return (
    <div className={classes.body}>
      <div className={classes.leftMain}>
        <div style={{ marginTop: 400 }}>
          <div style={{ fontSize: 30 }} className={classes.font}>
            Join the Queue Overflow community
          </div>
          {features.map((item) => {
            return (
              <div className={classes.rowTitle}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  color={"black"}
                  style={{ margin: 10 }}
                />
                <div style={{ fontSize: 20 }} className={classes.font}>
                  {item.titile}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}
          className={classes.font}
        >
          Collaborate and share knowledge with a private group for FREE. Get
          Queue Overflow for Teams free for up to 50 users.
        </div>
      </div>
      <div className={classes.rightMain}>
        <div className={classes.buttonList}>
          {buttons.map((item) => {
            return <NormalButton item={item} />;
          })}
          <div className={classes.inputBox}>
            <TextInput
              title={"Firstname"}
              value={firstName}
              setValue={setFirstName}
            />
            <TextInput
              title={"Lastname"}
              value={lastName}
              setValue={setLastName}
            />
            <TextInput title={"Email"} value={email} setValue={setEmail} />
            <TextInput
              title={"Username"}
              value={userName}
              setValue={setUserName}
            />
            <TextInput
              title={"Password"}
              value={password}
              setValue={setPassword}
            />

            <Button
              onClick={() => {
                setLoading(true);
                registerHandler();
              }}
              variant="contained"
              className={classes.loginButton}
              style={{ marginTop: 20, fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </div>
          <div style={{ marginTop: 20, marginLeft: 210 }}>
            <ClipLoader color={"#0A95FF"} loading={loading} size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
