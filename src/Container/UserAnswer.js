import React from "react";
import UserAnswersRow from "../Components/Row/UserAnswersRow";
import "./UserContainer.css";

const UserAnswer = (props) => {
  var data = props.data;
  return (
    <div className="user-container">
      {data.answered.map((element, index) => {
        return <UserAnswersRow key={element.id} value={element} />;
      })}
    </div>
  );
};

export default UserAnswer;
