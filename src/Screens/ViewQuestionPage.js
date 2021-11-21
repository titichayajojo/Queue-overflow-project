import styled from "styled-components";
import FetchRow from "../Components/Row/FetchRow";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Loader from "react-loader-spinner";
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

function ViewQuestionPage(props) {
  const [loading, setLoading] = useState(true);
  const [newAnswer, setAnswer] = useState(false);
  let params = useParams();
  let [data, setData] = useState(null);
  let [updateData, setUpdatedData] = useState(null);
  const [data2, setData2] = useState(null);

  const finishLoading = async () => {
    setLoading(false);
  };
  const fetchData = useCallback(async () => {
    var headers = {};
    if (!newAnswer) {
      fetch("http://127.0.0.1:8000/api/question/" + params.item, {
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
          console.log(jsonResponse);
          setData(jsonResponse);
        })
        .catch((error) => console.error(error, error.stack));

      fetch("http://127.0.0.1:8000/api/question/" + params.item + "/", {
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
          console.log(jsonResponse);
          setUpdatedData(jsonResponse);
        })
        .catch((error) => console.error(error, error.stack));
    }

    fetch("http://127.0.0.1:8000/api/answer/" + params.item, {
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
        setData2(jsonResponse);
      })
      .catch((error) => console.error(error, error.stack));
  }, [newAnswer]);

  useEffect(async () => {
    fetchData().then(() => {});
  }, [fetchData]);

  useEffect(() => {
    if (data && updateData && data2) {
      finishLoading();
    }
  }, [data, updateData, data2]);
  return (
    <div>
      <Loader
        style={{
          position: "absolute",
          marginLeft: "45%",
          marginTop: "10%",
        }}
        type="ThreeDots"
        color="white"
        height={150}
        width={150}
        visible={loading}
      />

      <BodyDiv style={{}}>
        {data != null &&
          updateData &&
          data2 &&
          data.map((element, index) => {
            return (
              <FetchRow
                key={element.id}
                value={element}
                params={params.item}
                data={data2}
                state={newAnswer}
                setState={setAnswer}
              />
            );
          })}
      </BodyDiv>
    </div>
  );
}

export default ViewQuestionPage;
