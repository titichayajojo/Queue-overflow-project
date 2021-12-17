import AnswerVoteRow from "./AnswerVoteRow";
import ProfileRow from "./ProfileRow";

function AnswersRow(props) {
  return (
    <div>
      <AnswerVoteRow
        value={props.value}
        state={props.state}
        setState={props.setState}
      />
      <ProfileRow value={props.value} />
    </div>
  );
}

export default AnswersRow;
