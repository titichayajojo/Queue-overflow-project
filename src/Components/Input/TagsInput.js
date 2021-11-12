import { useEffect, useState, useRef } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TagsInput.css";

function TagsInput(props) {
  const [tags, setTags] = useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.setSelectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    const newTags = tags.filter((tag) => tags.indexOf(tag) !== index);
    setTags([...newTags]);
    props.setSelectedTags([...newTags]);
  };
  return (
    <div className="tags-input">
      <ul className="tags-list">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span>{tag}</span>
            <i className="material-icons" onClick={() => removeTags(index)}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{ marginLeft: 10 }}
              />
            </i>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => addTags(event)}
        placeholder="e.g.(python html css)"
      />
    </div>
  );
}
export default TagsInput;
