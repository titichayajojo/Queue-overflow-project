import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFrown } from "@fortawesome/free-solid-svg-icons";
import UserQuestion from "../Container/UserQuestions";
import UserAnswer from "../Container/UserAnswer";
import "./UserPage.css";

const UserPage = (props) => {
  var data = props.data;
  let pic =
    require("../django-postgres/env/postgresTest/media/no_profile_pic.png").default;
  if (data) {
    if (data[0].url != null) {
      pic = require("../django-postgres/env/postgresTest" +
        data[0].url).default;
    }
  }
  return (
    <div className="profile-head">
      {data != null && (
        <div className="profile-info">
          <div className="profile-name">
            {data != null && <img src={pic} height={100} width={100} />} &nbsp;
            {data[0].first_name} &nbsp;
            {data[0].last_name}
          </div>
          <div className="profile-stat">
            Date joined &nbsp; {data[0].date_joined.substring(0, 10)} &nbsp;
          </div>
          <div className="profile-questions">
            Questions ({data[0].number_of_question_asked})
          </div>
          <UserQuestion data={data[0]} />
          <div className="profile-questions">
            Answers ({data[0].number_of_answered})
          </div>
          <UserAnswer data={data[0]} />
        </div>
      )}
      {data == null && (
        <div>
          <div className="no-user-icon">
            {" "}
            <FontAwesomeIcon icon={faFrown} size="5x" color="#C1C1C2" />
          </div>
          <div className="no-user">You are not logged in</div>
        </div>
      )}
    </div>
  );
};
export default UserPage;
