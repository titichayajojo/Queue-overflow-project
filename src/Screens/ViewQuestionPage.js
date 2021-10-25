import styled from "styled-components";
import Header from "../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import ViewQuestionHeader from "../Components/Header/ViewQuestionHeader";

const VotesRow = styled.div`
  justify-content: center;
  display: flex;
  span {
    padding-left: 30px;
    padding-bottom: 10px;
    line-height: 25px;
    font-size: 0.9rem;
    width: 700px;
  }
`;

const ArrowsRow = styled.div`
  width: 50px;
  text-align: center;
`;

const Votes = styled.div`
  font-size: 1rem;
  color: hsl(210, 8%, 82.5%);
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

const TagRow = styled.div`
  padding: 10px;
  text-align: center;
  margin-right: 210px;
`;

const WriterRow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-left: 570px;
  
  
`;

const Writer = styled.div`
    width: 190px;
    height: 67px;
    background-color: hsl(206, 53%, 35%);
    padding-left: 10px;
  
`;

const AskedDate = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  color: hsl(210deg 8% 70%);
  font-size: 0.8rem;

`;

const WriterName = styled.span`
  padding-left: 10px;
  font-size: 0.8rem;
  color: hsl(206deg 100% 60%);
`;

function ViewQuestionPage() {
  return (
    <div>
      <Header />
      <ViewQuestionHeader />
      <VotesRow>
        <ArrowsRow>
          <FontAwesomeIcon icon={faSortUp} size="4x" color="grey" />
          <Votes>1000</Votes>
          <FontAwesomeIcon icon={faSortDown} size="4x" color="grey" />
        </ArrowsRow>
        <span>
          I need to test catch when fetching data request rejects but I don't
          understand why error is not catched and I recieved this error:
          UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
          error originated either by throwing inside of an async function
          without a catch block, or by rejecting a promise which was not handled
          with .catch(). (rejection id: 2) If I test case when fetchSomething
          resolves with Promise.resolve() evertyhing works fine and tests are
          correct but when I try to Promise.reject() in order to test catch case
          then this error is not catched and I have unhandled promise rejection.
          (Why code looks like this: In other places in the app I handle
          changing of status with redux, so testing of catch is easy, but in one
          place I need to fetch 3 different assets for component and I decided
          to handle change of status with useState because extracting 3
          different statuses from redux and combining it will be ugly, with
          useState is much cleaner i think) Thanks in advance for help! :) I
          need to test catch when fetching data request rejects but I don't
          understand why error is not catched and I recieved this error:
          UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
          error originated either by throwing inside of an async function
          without a catch block, or by rejecting a promise which was not handled
          with .catch(). (rejection id: 2) If I test case when fetchSomething
          resolves with Promise.resolve() evertyhing works fine and tests are
          correct but when I try to Promise.reject() in order to test catch case
          then this error is not catched and I have unhandled promise rejection.
          (Why code looks like this: In other places in the app I handle
          changing of status with redux, so testing of catch is easy, but in one
          place I need to fetch 3 different assets for component and I decided
          to handle change of status with useState because extracting 3
          different statuses from redux and combining it will be ugly, with
          useState is much cleaner i think) Thanks in advance for help! :) I
          need to test catch when fetching data request rejects but I don't
          understand why error is not catched and I recieved this error:
          UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
          error originated either by throwing inside of an async function
          without a catch block, or by rejecting a promise which was not handled
          with .catch(). (rejection id: 2) If I test case when fetchSomething
          resolves with Promise.resolve() evertyhing works fine and tests are
          correct but when I try to Promise.reject() in order to test catch case
          then this error is not catched and I have unhandled promise rejection.
          (Why code looks like this: In other places in the app I handle
          changing of status with redux, so testing of catch is easy, but in one
          place I need to fetch 3 different assets for component and I decided
          to handle change of status with useState because extracting 3
          different statuses from redux and combining it will be ugly, with
          useState is much cleaner i think) Thanks in advance for help! :) I
          need to test catch when fetching data request rejects but I don't
          understand why error is not catched and I recieved this error:
          UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
          error originated either by throwing inside of an async function
          without a catch block, or by rejecting a promise which was not handled
          with .catch(). (rejection id: 2) If I test case when fetchSomething
          resolves with Promise.resolve() evertyhing works fine and tests are
          correct but when I try to Promise.reject() in order to test catch case
          then this error is not catched and I have unhandled promise rejection.
          (Why code looks like this: In other places in the app I handle
          changing of status with redux, so testing of catch is easy, but in one
          place I need to fetch 3 different assets for component and I decided
          to handle change of status with useState because extracting 3
          different statuses from redux and combining it will be ugly, with
          useState is much cleaner i think) Thanks in advance for help! :) I
          need to test catch when fetching data request rejects but I don't
          understand why error is not catched and I recieved this error:
          UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
          error originated either by throwing inside of an async function
          without a catch block, or by rejecting a promise which was not handled
          with .catch(). (rejection id: 2) If I test case when fetchSomething
          resolves with Promise.resolve() evertyhing works fine and tests are
          correct but when I try to Promise.reject() in order to test catch case
          then this error is not catched and I have unhandled promise rejection.
          (Why code looks like this: In other places in the app I handle
          changing of status with redux, so testing of catch is easy, but in one
          place I need to fetch 3 different assets for component and I decided
          to handle change of status with useState because extracting 3
          different statuses from redux and combining it will be ugly, with
          useState is much cleaner i think) Thanks in advance for help! :) I
          need to test catch when fetching data request rejects but I don't
          understand why error is not catched and I recieved this error:
          UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
          error originated either by throwing inside of an async function
          without a catch block, or by rejecting a promise which was not handled
          with .catch(). (rejection id: 2) If I test case when fetchSomething
          resolves with Promise.resolve() evertyhing works fine and tests are
          correct but when I try to Promise.reject() in order to test catch case
          then this error is not catched and I have unhandled promise rejection.
          (Why code looks like this: In other places in the app I handle
          changing of status with redux, so testing of catch is easy, but in one
          place I need to fetch 3 different assets for component and I decided
          to handle change of status with useState because extracting 3
          different statuses from redux and combining it will be ugly, with
          useState is much cleaner i think) Thanks in advance for help! :)
        </span>
      </VotesRow>
      <TagRow>
        <Tag>java</Tag>
        <Tag>react.js</Tag>
        <Tag>jest.js</Tag>
        <Tag>react-hooks</Tag>
        <Tag>enzyme</Tag>
        <Tag>use-effect</Tag>
      </TagRow>

      <WriterRow>
          
        <Writer>
        <AskedDate>asked May 27 '20 at 8:06</AskedDate>
        <FontAwesomeIcon icon={faPaw} size="2x" />
        <WriterName>Darek Gala</WriterName>
        </Writer>
      </WriterRow>

      
    </div>
  );
}

export default ViewQuestionPage;
