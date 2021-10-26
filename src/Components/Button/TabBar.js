import classes from "./TabBar.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";

const TabBar = (props) => {
  const history = useHistory();
  const buttonHandler = (pros) => {
    history.push("/feature?choice=" + props.title);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const curButton = queryParams.get("choice");

  console.log(curButton);
  return (
    <div
      onClick={() => {
        buttonHandler();
      }}
      className={classes.bar}
      style={{
        backgroundColor:
          curButton === props.title ? "rgb(241,242,243)" : "white",
      }}
    >
      {/* <div style={{ color: "balck" }}>Questions</div> */}
      <div
        style={{
          color: "black",

          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {props.title}
      </div>
      {curButton === props.title ? (
        <div className={classes.stickyBar}></div>
      ) : (
        ""
      )}
    </div>
  );
};
export default TabBar;
