import styled from "styled-components";
import FetchRow from "../Components/Row/FetchRow";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BodyDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Border = styled.div`
  border-bottom: ridge hsl(210, 4.5%, 30.5%) 0.1px;
  width: 50vw;
`;

function ViewQuestionPage() {
  let params = useParams();
  let [data, setData] = useState(null);
  let [updateData, setUpdatedData] = useState(null);

  useEffect(async () => {
    var headers = {};
    await fetch("http://127.0.0.1:8000/api/question/" + params.item + "/", {
      method: "PUT",
      mode: "cors",
      headers: headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)
        setUpdatedData(jsonResponse);
      })
      .catch((error) => console.error(error, error.stack));

    await fetch("http://127.0.0.1:8000/api/question/" + params.item, {
      method: "GET",
      mode: "cors",
      headers: headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        console.log(jsonResponse)
        setData(jsonResponse);
      })
      .catch((error) => console.error(error, error.stack));
  }, []);

  return (
    <div>
      <BodyDiv>
        {data &&
          data.map((element, index) => {
            return (
              <FetchRow key={element.id} value={element} params={params.item} />
            );
          })}
      </BodyDiv>
    </div>
  );
}

export default ViewQuestionPage;
