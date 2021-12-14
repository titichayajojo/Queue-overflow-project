import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserQuestion from "../Container/UserQuestions";
import UserAnswer from "../Container/UserAnswer";
import "./UserPage.css";

const UserPage = (props) => {
  var data = props.data;
  return (
    <div className="profile-head">
      {data != null && (
        <div className="profile-info">
          <div className="profile-name">
            {data != null && <FontAwesomeIcon icon={faUser} size="3x" />} &nbsp;
            {data[0].first_name} &nbsp;
            {data[0].last_name}
          </div>
          <div className="profile-stat">
            Date joined &nbsp; {data[0].date_joined.substring(0, 10)} &nbsp;
          </div>
          <div className="profile-questions">
            Questions ({data[0].number_of_question_asked})
          </div>
          <UserQuestion className="questions-list" data={data[0]} />
          <div className="profile-questions">
            Answers ({data[0].number_of_answered})
          </div>
          <UserAnswer className="questions-list" data={data[0]} />
        </div>
      )}
    </div>
  );
};
export default UserPage;
