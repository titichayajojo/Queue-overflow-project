import classes from "./TagPage.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link, useHistory, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { SearchInput } from "../Components/Input/Inputs";
const TagPage = (props) => {
  const [items, setitems] = useState(props.tags);
  const [text, setText] = useState("");
  const [newItems, setnewItems] = useState(items);
  useEffect(() => {
    const searchHandler = (item) => {
      if (items) {
        setnewItems(
          items.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
          )
        );
      }
    };
    searchHandler();
  }, [text]);

  return (
    <div className={classes.column} style={{ marginLeft: 10, marginTop: 100 }}>
      <div
        className={classes.heading1}
        style={{ fontFamily: "inherit", fontWeight: "bold", color: "#C1C1C2" }}
      >
        Tags
      </div>
      <div style={{}}>
        <article
          lang="en"
          style={{ marginTop: 20, fontFamily: "inherit" }}
          className={classes.heading2}
        >
          <p style={{ color: "#C1C1C2" }}>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
        </article>
        <div
          className={classes.row}
          style={{
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10,
          }}
        >
          <SearchInput
            onChange={(chunk) => {
              setText(chunk.target.value);
            }}
            value={text}
            type="text"
            placeholder="Filter by tags"
            style={{
              backgroundColor: "white",
              width: 500,
              height: 35,
              borderRadius: 10,
            }}
          ></SearchInput>
        </div>
        <Grid
          container
          spacing={2}
          style={{
            width: "100%",

            padding: 10,
            marginTop: 20,
          }}
        >
          {newItems != null &&
            newItems.map((item) => {
              return (
                <Grid item xs={12} xl={3}>
                  <div
                    style={{
                      height: 250,
                      borderColor: "#D6D9DC",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderRadius: 10,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#3E4A52",
                        position: "absolute",
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 4,
                        top: 20,
                        left: 20,
                      }}
                    >
                      <Link to={`/?choice=Questions&input=${item.title}`}>
                        <div
                          onclick={() => {}}
                          className={classes.tagName}
                          style={{ color: "#9CC3DB", cursor: "pointer" }}
                        >
                          {item.title}
                        </div>
                      </Link>
                    </div>
                    <article
                      lang="en"
                      style={{
                        fontFamily: "inherit",
                        marginTop: 40,
                        padding: 25,
                      }}
                    >
                      <p style={{ color: "#C1C1C2" }}>{item.description}</p>
                    </article>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};
export default TagPage;
