import classes from "./SignUpPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faPizzaSlice,
  faTags,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import NormalButton from "../Components/Button/NormalButton";
import TextInput from "../Components/Input/TextInput";
import Button from "@mui/material/Button";
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
  return (
    <div className={classes.body}>
      <div className={classes.leftMain}>
        <div style={{ marginTop: 400 }}>
          <div style={{ fontSize: 30 }} className={classes.font}>
            Join the Stack Overflow community
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
          Stack Overflow for Teams free for up to 50 users.
        </div>
      </div>
      <div className={classes.rightMain}>
        <div className={classes.buttonList}>
          {buttons.map((item) => {
            return <NormalButton item={item} />;
          })}
          <div className={classes.inputBox}>
            <TextInput title={"Firstname"} />
            <TextInput title={"Lastname"} />
            <TextInput title={"Nickname"} />
            <TextInput title={"Username"} />
            <TextInput title={"Password"} />

            <Button
              variant="contained"
              className={classes.loginButton}
              style={{ marginTop: 20, fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
