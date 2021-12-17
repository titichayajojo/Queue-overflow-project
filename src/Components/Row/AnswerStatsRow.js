import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Votes, ArrowsRow } from "./StatsRowStyled";
import { useSelector } from "react-redux";

async function vote(des, id, token) {
  var votes = Number(document.getElementById("voteId").innerHTML);
  console.log("vote = ", votes);
  var headers = { Authorization: token };
  await fetch("http://127.0.0.1:8000/api/" + des + "/vote/" + id + "/", {
    method: "PUT",
    mode: "cors",
    headers: headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.error == null) {
        votes += 1;
        document.getElementById("voteId").innerHTML = votes;
        console.log("answerVoted");
      }
    })
    .catch((error) => console.error(error, error.stack));
}

async function devote(des, id, token) {
  var votes = Number(document.getElementById("voteId").innerHTML);
  var headers = { Authorization: token };
  await fetch("http://127.0.0.1:8000/api/" + des + "/devote/" + id + "/", {
    method: "PUT",
    mode: "cors",
    headers: headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.error == null) {
        votes -= 1;
        document.getElementById("voteId").innerHTML = votes;
      }
    })
    .catch((error) => console.error(error, error.stack));
}

function AnswerStatsRow(props) {
  const counter = useSelector((state) => state.counter.token);
  const votes = props.data.votes;
  var key = props.data.id;
  var des = "question";
  if (props.data.questionId != null) {
    des = "answer";
  }
  return (
    <ArrowsRow>
      <FontAwesomeIcon
        icon={faSortUp}
        size="4x"
        color="grey"
        onClick={async () => {
          await vote(des, key, counter);
        }}
      />
      <Votes id="voteId">{votes}</Votes>
      <FontAwesomeIcon
        icon={faSortDown}
        size="4x"
        color="grey"
        onClick={async () => {
          await devote(des, key, counter);
        }}
      />
    </ArrowsRow>
  );
}

export default AnswerStatsRow;
