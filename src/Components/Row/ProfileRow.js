import {
  WriterRow,
  Writer,
  AskedDate,
  WriterName,
  Border,
} from "./ProfileRowStyled";

import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";

function ProfileRow(props) {
  if (props.value) {
    let pic =
      require("../../django-postgres/env/postgresTest/media/no_profile_pic.png").default;
    try {
      pic = require("../../django-postgres/env/postgresTest/media/" +
        writer +
        "/" +
        writer +
        ".jpeg").default;
    } catch (err) {
      console.log(err);
    }
    let createdAt = new Date(props.value.createdAt);
    const writer = props.value.writer;
    const date = `${createdAt.getMonth()} '${createdAt.getDate()} at ${createdAt.getHours()}:${createdAt.getMinutes()}`;
    return (
      <Border>
        <WriterRow>
          <Writer>
            <AskedDate>Asked Date {date}</AskedDate>
            <img src={pic} height={30} width={30} />
            <WriterName to={"/OtherUserPage/" + writer}>{writer}</WriterName>
          </Writer>
        </WriterRow>
      </Border>
    );
  }
  return <div></div>;
}

export default ProfileRow;
