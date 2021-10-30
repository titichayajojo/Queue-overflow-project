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
const TagPage = (props) => {
  const Tags = [
    { name: "tag1" },
    { name: "tag2" },
    { name: "tag3" },
    { name: "tag4" },
    { name: "tag5" },
    { name: "tag6" },
    { name: "tag7" },
    { name: "tag8" },
    { name: "tag9" },
    { name: "tag10" },
    { name: "tag11" },
    { name: "tag12" },
    { name: "tag13" },
  ];
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
            //   value={value}
            //   onChange={handleChange}
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
            backgroundColor: "white",
            padding: 10,
            marginTop: 20,
          }}
        >
          {Tags.map((item) => {
            return (
              <Grid item xs={12} xl={3}>
                <div
                  style={{
                    height: 200,
                    borderColor: "#D6D9DC",
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderRadius: 10,
                  }}
                ></div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
export default TagPage;
