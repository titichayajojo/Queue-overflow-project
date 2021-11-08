import StatsRow from "./StatsRow";
import { VotesRow } from "./VoteRowStlyed";
import {Editor, EditorState, convertFromRaw} from 'draft-js';

function VoteRow(props) {
  if (props.value) {
    const { body,votes,id } = props.value;
    const contentState = convertFromRaw(body);
    const editorState = EditorState.createWithContent(contentState);

    return (
      <VotesRow>
        <StatsRow key={id} value={votes}/>
        <span>
          <Editor editorState={editorState} readOnly={true}></Editor>
        </span>
      </VotesRow>
    );
  }
  return <div></div>
}

export default VoteRow;
