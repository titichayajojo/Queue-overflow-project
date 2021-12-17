import AnswerStatsRow from "./AnswerStatsRow";
import { VotesRow } from "./VoteRowStlyed";
import { Editor, EditorState, convertFromRaw } from "draft-js";

function AnswerVoteRow(props) {
  if (props.value) {
    const { body, votes, id } = props.value;
    const contentState = convertFromRaw(body);
    const editorState = EditorState.createWithContent(contentState);

    return (
      <VotesRow>
        <AnswerStatsRow data={props.value} />
        <span>
          <Editor editorState={editorState} readOnly={true}></Editor>
        </span>
      </VotesRow>
    );
  }
  return <div></div>;
}

export default AnswerVoteRow;
