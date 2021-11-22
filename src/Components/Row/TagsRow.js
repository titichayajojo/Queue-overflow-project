import { TagRow, Tag } from "./TagsRowStyled";

function TagsRow(props) {
  const tags = props.value.tags;
  return (
    <TagRow>
      {tags &&
            tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
        })}
    </TagRow>
  );
}

export default TagsRow;
