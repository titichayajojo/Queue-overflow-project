import AnswerVoteRow from "./AnswerVoteRow";
import ProfileRow from "./ProfileRow";

function AnswersRow() {
  return (
    <div>
<<<<<<< HEAD
      <VoteRow />
      <ProfileRow />
=======
      <AnswerVoteRow
        value={props.value}
        state={props.state}
        setState={props.setState}
      />
      <ProfileRow value={props.value} />
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
    </div>
  );
}

export default AnswersRow;
