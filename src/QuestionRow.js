import styled from "styled-components";
import { Link } from "react-router-dom";

const QuestionStat = styled.div`
  text-align: center;
  font-size: 1.2rem;
  display: inline-block;
  color: #aaa;
  margin-top: 7px;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 7px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const QuestionLink = styled(Link)`
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;

const StyledQuestionRow = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color: #aaa;
  font-size: 0.8rem;
  float: right;
  padding: 10px 0;
`;

const UserLink = styled.a`
  color: #3ca4ff;
`;

function formatDate(createdAt) {
  var today = new Date();
  var createdDate = new Date(createdAt);
  var String = "";

  var Difference_In_Time = today.getTime() - createdDate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  String = `${parseInt(Difference_In_Days)} Day`;

  //less than 1 day convert to hour
  if (Difference_In_Days < 1) {
    Difference_In_Days *= 24;
    String = `${parseInt(Difference_In_Days)} Hour`;
  }

  //less than 1 hour convert to minute
  if (Difference_In_Days < 1) {
    Difference_In_Days *= 60;
    String = `${parseInt(Difference_In_Days)} Minute`;
  }

  //less than 1 minute convert to seconds
  if (Difference_In_Days < 1) {
    Difference_In_Days *= 60;
    String = `${parseInt(Difference_In_Days)} Second`;
  }

  if (String.split(" ")[0] !== "1") String += "s";

  return String + ' ago';
}

function QuestionRow(props) {
  const value = props.value;
  const tags = value.tags;
  const id = value.id;
  const date = formatDate(value.createdAt);
  return (
    <StyledQuestionRow>
      <QuestionStat>
        {value.votes}
        <span>votes</span>
      </QuestionStat>
      <QuestionStat>
        {value.answers}
        <span>answers</span>
      </QuestionStat>
      <QuestionStat>
        {value.views}
        <span>views</span>
      </QuestionStat>
      <QuestionTitleArea>
        <QuestionLink to={"/ViewQuestionPage/"+ id}>{value.title}</QuestionLink>
        <WhoAndWhen>
          {date} <UserLink>{value.writer}</UserLink>
        </WhoAndWhen>
        {tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </QuestionTitleArea>
    </StyledQuestionRow>
  );
}

export default QuestionRow;
