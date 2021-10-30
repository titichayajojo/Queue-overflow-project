import classes from "./LoginPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import NormalButton from "../Components/Button/NormalButton";
import TextInput from "../Components/Input/TextInput";

import { useState, useEffect } from "react";

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
            <TextInput title={"Email"} />
            <TextInput title={"Password"} />
            <Button
              variant="contained"
              className={classes.loginButton}
              style={{ marginTop: 20 }}
            >
              Log in
            </Button>
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
