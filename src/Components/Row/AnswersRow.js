import VoteRow from "./VoteRow";
import ProfileRow from "./ProfileRow";

function AnswersRow(props) {
  return (
    <div>
      <VoteRow value={props.value}/>
      <ProfileRow value={props.value}/>
    </div>
  );
}

export default AnswersRow;
