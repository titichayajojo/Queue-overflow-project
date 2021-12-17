import styled from "styled-components";
import Header from "../Components/Header/Header";
import VoteRow from "../Components/Row/VoteRow";
import TagsRow from "../Components/Row/TagsRow";
import ProfileRow from "../Components/Row/ProfileRow";
import AnswersRow from "../Components/Row/AnswersRow";
import { BlueButton } from "../Components/Header/ViewQuestionHeaderStyle";
import ViewQuestionHeader from "../Components/Header/ViewQuestionHeader";
import { useParams } from "react-router-dom";

const TotalAnswers = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-right: 660px;
  font-size: 1.2rem;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const YourAnswer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-right: 660px;
  font-size: 1.2rem;
  padding-bottom: 50px;
  padding-top: 20px;
`;

const AnswerInput = styled.input`
  display: grid;
  box-sizing: border-box;
  width: 600px;
  border-radius: 3px;
  border: 1px solid #777;
  padding: 100px;
  margin-right: 180px;
`;

const AnswerInputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerButtonRow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 660px;
`;

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

<<<<<<< HEAD
function ViewQuestionPage() {
  let params = useParams();
  console.log(params.item)
  return (
    <div>
      <Header />
      <BodyDiv>
        <ViewQuestionHeader />
        <VoteRow />
        <TagsRow />
        <ProfileRow />
        <TotalAnswers>2 Answers</TotalAnswers>
        <AnswersRow />
        <AnswersRow />
        <YourAnswer>Your Answer</YourAnswer>
        <AnswerInputRow>
          <AnswerInput></AnswerInput>
        </AnswerInputRow>
        <AnswerButtonRow>
          <BlueButton>Post&nbsp;Your&nbsp;Answer</BlueButton>
        </AnswerButtonRow>
=======
function ViewQuestionPage(props) {
  console.log("ViewQuestion Called");
  const [loading, setLoading] = useState(true);
  const [newAnswer, setAnswer] = useState(false);
  const [votes, setVotes] = useState(false);
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
  }, [newAnswer, votes]);

  useEffect(async () => {
    fetchData().then(() => {});
  }, [fetchData]);

  useEffect(() => {
    if (data && updateData && data2) {
      finishLoading();
    }
  }, [data, updateData, data2]);
  console.log("data = ", data);
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
                state2={votes}
                setState2={setVotes}
              />
            );
          })}
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
      </BodyDiv>
    </div>
  );
}

export default ViewQuestionPage;
