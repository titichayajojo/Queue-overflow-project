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

  return (
    <div
      onClick={() => {
        buttonHandler();
      }}
      className={classes.bar}
      style={{
        backgroundColor: curButton === props.title ? "#3D3D3D" : "#2D2D2D",
      }}
    >
      {/* <div style={{ color: "balck" }}>Questions</div> */}
      <div
        style={{
          color: "#C1C1C2",
          padding: 10,
          paddingLeft: 50,
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
