import React from "react";
import QuestionRow from "../Components/Row/QuestionRow";
import "./UserContainer.css";

const UserQuestions = (props) => {
  var data = props.data;
  return (
    <div className="user-container">
      {data.questions_asked.map((element, index) => {
        return <QuestionRow key={element.id} value={element} />;
      })}
    </div>
  );
};

export default UserQuestions;
