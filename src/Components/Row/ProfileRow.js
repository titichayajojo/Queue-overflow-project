import {
  WriterRow,
  Writer,
  AskedDate,
  WriterName,
  Border,
} from "./ProfileRowStyled";

import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileRow(props) {
  if (props.value) {
    let createdAt = new Date(props.value.createdAt);
    const writer = props.value.writer;
    const date = `${createdAt.getMonth()} '${createdAt.getDate()} at ${createdAt.getHours()}:${createdAt.getMinutes()}`
    return (
      <Border>
        <WriterRow>
          <Writer>
            <AskedDate>Asked Date {date}</AskedDate>
            <FontAwesomeIcon icon={faPaw} size="2x" />
            <WriterName>{writer}</WriterName>
          </Writer>
        </WriterRow>
      </Border>
    );
  }
  return <div></div>;
}

export default ProfileRow;
