import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserQuestion from "../Container/UserQuestions";
import UserAnswer from "../Container/UserAnswer";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./OtherUser.css";

function OtherUserPage(props) {
  const counter = useSelector((state) => state.counter.token);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState(null);
  const param = useParams();
  let [data, setUser] = useState(null);

  useEffect(() => {
    var headers = { Authorization: counter };
    fetch("http://127.0.0.1:8000/api/user/info/" + param.item, {
      method: "GET",
      mode: "cors",
      headers: headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setUser(jsonResponse);

        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="other-profile-head">
        <Loader
          style={{
            position: "absolute",
            marginLeft: "35%",
            marginTop: "10%",
          }}
          type="ThreeDots"
          color="white"
          height={150}
          width={150}
          visible={loading}
        />
        {data != null && (
          <div className="other-profile-info">
            <div className="other-profile-name">
              {data != null && <FontAwesomeIcon icon={faUser} size="3x" />}{" "}
              &nbsp;
              {data[0].first_name} &nbsp;
              {data[0].last_name}
            </div>
            <div className="other-profile-stat">
              Date joined &nbsp; {data[0].date_joined.substring(0, 10)} &nbsp;
            </div>
            <div className="other-profile-questions">
              Questions ({data[0].number_of_question_asked})
            </div>
            <UserQuestion className="questions-list" data={data[0]} />
            <div className="other-profile-questions">
              Answers ({data[0].number_of_answered})
            </div>
            <UserAnswer className="questions-list" data={data[0]} />
          </div>
        )}
      </div>
    </div>
  );
}
export default OtherUserPage;
