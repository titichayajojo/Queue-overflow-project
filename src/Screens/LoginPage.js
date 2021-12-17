import classes from "./LoginPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import NormalButton from "../Components/Button/NormalButton";
import TextInput from "../Components/Input/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
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
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const loginHandler = (props) => {
    var headers = {};
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        if (jsonResponse != null) {
          setLoading(false);
          alert("Login successful");
          history.push("/home");
          dispatch(counterActions.setToken(jsonResponse.token));
        } else {
          setLoading(false);
          alert("please check your email and password and try again");
        }
      })
      .catch((error) => console.error(error, error.stack));
  };
  return (
    <div>
      <div className={classes.body}>
        {/* <FontAwesomeIcon icon={faAdjust} size="3x" color={"black"} /> */}
        <div className={classes.column}>
          <div className={classes.logo}>
            <FontAwesomeIcon
              icon={faGripLinesVertical}
              size="3x"
              color={"black"}
            />
          </div>

          {buttons.map((item) => {
            return <NormalButton item={item} />;
          })}

          <div className={classes.inputBox}>
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
                loginHandler();
              }}
              variant="contained"
              className={classes.loginButton}
              style={{ marginTop: 20 }}
            >
              Log in
            </Button>
          </div>
          <div style={{ marginTop: 20 }}>
            <ClipLoader color={"#0A95FF"} loading={loading} size={50} />
          </div>

          <div
            style={{
              marginTop: 80,

              color: "black",
            }}
          >
            Don’t have an account?
          </div>
          <Link to="/SignUp" style={{ textDecoration: "none" }}>
            <div
              style={{
                marginTop: 10,

                color: "#0A95FF",
              }}
            >
              Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
