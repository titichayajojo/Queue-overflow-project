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
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
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
        style={{ fontFamily: "inherit", fontWeight: "bold" }}
      >
        Tags
      </div>
      <div style={{}}>
        <article
          lang="en"
          style={{ marginTop: 20, fontFamily: "inherit" }}
          className={classes.heading2}
        >
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <p style={{ marginTop: 20, color: "#009FD5" }}>
            Show all tag synonyms
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
          <TextField
            style={{ backgroundColor: "white", borderRadius: 20, width: 400 }}
            id="outlined-multiline-flexible"
            placeholder="Filter by tags"
            value={text}
            onChange={(chunk) => {
              setText(chunk.target.value);
            }}
          />
          <ToggleButtonGroup
            color="primary"
            style={{ backgroundColor: "white", marginRight: 50 }}
            exclusive
          >
            <ToggleButton value="web">Popular</ToggleButton>
            <ToggleButton value="android">Name</ToggleButton>
            <ToggleButton value="ios">New</ToggleButton>
          </ToggleButtonGroup>
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
                        backgroundColor: "#E1ECF4",
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
                      <div className={classes.tagName}>{item.title}</div>
                    </div>
                    <article
                      lang="en"
                      style={{
                        fontFamily: "inherit",
                        marginTop: 40,
                        padding: 25,
                      }}
                    >
                      <p style={{ color: "white" }}>{item.description}</p>
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
