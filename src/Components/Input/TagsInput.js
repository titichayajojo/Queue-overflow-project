import { useEffect, useState, useRef } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TagsInput.css";
import { color } from "@mui/system";

function TagsInput(props) {
  const [tags, setTags] = useState([]);
  const [existingTags, setExistingTags] = useState(null);

  useEffect(() => {
    var headers = {};
    fetch("http://127.0.0.1:8000/api/tags", {
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
        setExistingTags(jsonResponse);
      })
      .catch((error) => console.error(error, error.stack));
  }, []);

  const addTags = (event) => {
    if (
      (event.key === " " || event.key === "Enter") &&
      event.target.value !== "" &&
      existingTags != null
    ) {
      const inTag = event.target.value.trim()
      var tag = existingTags.find((item) => item.title === inTag);
      var addedTag = tags.find((item) => item === inTag);
      var notExist = document.getElementById("errorTagNotExist");
      var alreadyAdded = document.getElementById("errorTagAlreadyAdded");
      var limit = document.getElementById("errorTagLimit");

      if (tag != null && addedTag == null && tags.length <= 4) {
        setTags([...tags, inTag]);
        props.setSelectedTags([...tags,inTag]);
        event.target.value = "";
      } else {
        document.getElementsByClassName("tags-input")[0].style.borderColor =
          "#ff0033";
        setTimeout(function () {
          document.getElementsByClassName("tags-input")[0].style.borderColor =
            "#777";
          notExist.innerHTML = "";
          alreadyAdded.innerHTML = "";
          limit.innerHTML = "";
        }, 1500);
        if (tag == null) {
          notExist.innerHTML = event.target.value + " doesn't exist";
        } else if (addedTag != null) {
          alreadyAdded.innerHTML = event.target.value + " already added";
        } else {
          limit.innerHTML = "You can only add 5 tags";
        }
        event.target.value = "";
      }
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
      <div className="errorMessage">
        <span id="errorTagNotExist"> </span>
        <span id="errorTagAlreadyAdded"> </span>
        <span id="errorTagLimit"> </span>
      </div>
    </div>
  );
}
export default TagsInput;
