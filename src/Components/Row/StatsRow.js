import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Votes, ArrowsRow } from "./StatsRowStyled";
import { useSelector } from "react-redux";
import { useState } from "react";

function vote(des, id, token, state, setState) {
  console.log("vote = ", votes);
  var headers = { Authorization: token };
  fetch("http://127.0.0.1:8000/api/" + des + "/vote/" + id + "/", {
    method: "PUT",
    mode: "cors",
    headers: headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.error == null) {
        setState(!state);
        console.log("vote!");
      }
    })
    .catch((error) => console.error(error, error.stack));
}
function devote(des, id, token, state, setState) {
  var headers = { Authorization: token };
  fetch("http://127.0.0.1:8000/api/" + des + "/devote/" + id + "/", {
    method: "PUT",
    mode: "cors",
    headers: headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((jsonResponse) => {
      if (jsonResponse.error == null) {
        setState(!state);
        console.log("devote!");
        // document.getElementById("voteId").innerHTML = votes;
      }
    })
    .catch((error) => console.error(error, error.stack));
}

function StatsRow(props) {
  const counter = useSelector((state) => state.counter.token);
  const votes = props.data.votes;
  console.log("eiei = ", votes);
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
          vote(des, key, counter, props.state, props.setState);
        }}
      />
      <Votes id="voteId">{votes}</Votes>
      <FontAwesomeIcon
        icon={faSortDown}
        size="4x"
        color="grey"
        onClick={async () => {
          devote(des, key, counter, props.state, props.setState);
        }}
      />
    </ArrowsRow>
  );
}

export default StatsRow;
