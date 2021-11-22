import {
  WriterRow,
  Writer,
  AskedDate,
  WriterName,
  Border,
} from "./ProfileRowStyled";

import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileRow() {
  return (
    <Border>
      <WriterRow>
        <Writer>
          <AskedDate>asked May 27 '20 at 8:06</AskedDate>
          <FontAwesomeIcon icon={faPaw} size="2x" />
          <WriterName>Darek Gala</WriterName>
        </Writer>
      </WriterRow>
    </Border>
  );
}

export default ProfileRow;
