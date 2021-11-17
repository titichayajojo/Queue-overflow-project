import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Votes, ArrowsRow } from "./StatsRowStyled";

async function vote(des, id) {
  var votes = Number(document.getElementById("voteId").innerHTML);
  var headers = { Authorization: "4ac201a63372eb50e301263ceeaacbb83c762f78" };
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
      }
    })
    .catch((error) => console.error(error, error.stack));
}

async function devote(des, id) {
  var votes = Number(document.getElementById("voteId").innerHTML);
  var headers = { Authorization: "4ac201a63372eb50e301263ceeaacbb83c762f78" };
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

function StatsRow(props) {
  const votes = props.data.votes;
  var key = props.data.id;
  var des = "question";
  if (key == null) {
    key = props.data.questionId;
    des = "answer";
  }
  return (
    <ArrowsRow>
      <FontAwesomeIcon
        icon={faSortUp}
        size="4x"
        color="grey"
        onClick={async () => {
          await vote(des, key);
        }}
      />
      <Votes id="voteId">{votes}</Votes>
      <FontAwesomeIcon
        icon={faSortDown}
        size="4x"
        color="grey"
        onClick={async () => {
          await devote(des, key);
        }}
      />
    </ArrowsRow>
  );
}

export default StatsRow;
