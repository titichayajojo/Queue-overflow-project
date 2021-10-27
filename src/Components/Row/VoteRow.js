import StatsRow from "./StatsRow";
import { VotesRow } from "./VoteRowStlyed";

function VoteRow(props) {
  if (props.value) {
    const { body,votes,id } = props.value;

    return (
      <VotesRow>
        <StatsRow key={id} value={votes}/>
        <span>{body}</span>
      </VotesRow>
    );
  }
  return <div></div>
}

export default VoteRow;
