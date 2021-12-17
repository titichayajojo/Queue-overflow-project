import StatsRow from "./StatsRow";
import { VotesRow } from "./VoteRowStlyed";

<<<<<<< HEAD
function VoteRow() {
  return (
    <VotesRow>
      <StatsRow />
      <span>
        I need to test catch when fetching data request rejects but I don't
        understand why error is not catched and I recieved this error:
        UnhandledPromiseRejectionWarning: Unhandled promise rejection. This
        error originated either by throwing inside of an async function without
        a catch block, or by rejecting a promise which was not handled with
        .catch(). (rejection id: 2) If I test case when fetchSomething resolves
        with Promise.resolve() evertyhing works fine and tests are correct but
        when I try to Promise.reject() in order to test catch case then this
        error is not catched and I have unhandled promise rejection. (Why code
        looks like this: In other places in the app I handle changing of status
        with redux, so testing of catch is easy, but in one place I need to
        fetch 3 different assets for component and I decided to handle change of
        status with useState because extracting 3 different statuses from redux
        and combining it will be ugly, with useState is much cleaner i think)
        Thanks in advance for help! :)
      </span>
    </VotesRow>
  );
=======
function VoteRow(props) {
  if (props.value) {
    const { body, votes, id } = props.value;
    const contentState = convertFromRaw(body);
    const editorState = EditorState.createWithContent(contentState);

    return (
      <VotesRow>
        <StatsRow
          data={props.value}
          state={props.state}
          setState={props.setState}
        />
        <span>
          <Editor editorState={editorState} readOnly={true}></Editor>
        </span>
      </VotesRow>
    );
  }
  return <div></div>;
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
}

export default VoteRow;
