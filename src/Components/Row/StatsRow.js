import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Votes, ArrowsRow } from "./StatsRowStyled";

function StatsRow(props) {
  const votes = props.value
  return (
    <ArrowsRow>
      <FontAwesomeIcon icon={faSortUp} size="4x" color="grey" />
      <Votes>{votes}</Votes>
      <FontAwesomeIcon icon={faSortDown} size="4x" color="grey" />
    </ArrowsRow>
  );
}

export default StatsRow;
