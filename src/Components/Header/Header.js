import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { ProfileLink, LogoLink } from "../Link/Link";
import { StyledHeader } from "../Header/HeaderStyle";
import { SearchInput } from "../Input/Inputs";
import { NavLink, Link } from "react-router-dom";
<<<<<<< HEAD

function Header() {
=======
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

function Header() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const counter = useSelector((state) => state.counter.token);
  const userName = useSelector((state) => state.counter.userName);

  const searchHandler = (text) => {
    history.push({
      search: `choice=Questions&input=${search}`,
    });
  };

>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
  return (
    <StyledHeader>
      <LogoLink to="/LoginPage">
        <FontAwesomeIcon icon={faGripLinesVertical} size="2x" />
        <span>
          Queue<b>overflow</b>
        </span>
      </LogoLink>
<<<<<<< HEAD
      <form action="" className="search">
        <SearchInput type="text" placeholder="Search..."></SearchInput>
      </form>
      <ProfileLink to="/LoginPage">Login</ProfileLink>
=======
      <div className={classes.row} style={{}}>
        <SearchInput
          onChange={(text) => {
            setSearch(text.target.value);
          }}
          value={search}
          type="text"
          placeholder="Search..."
          style={{
            backgroundColor: "white",

            height: 35,
            borderRadius: 10,
          }}
        ></SearchInput>
        <ColorButton
          onClick={() => {
            searchHandler();
          }}
          variant="contained"
          style={{
            marginTop: 8,
            height: 35,
            marginLeft: 5,
            borderRadius: 10,
            backgroundColor: "#378AD3",
          }}
        >
          Search
        </ColorButton>
      </div>

      {counter == "" && (
        <ProfileLink to="/LoginPage" style={{ marginTop: 8 }}>
          Login
        </ProfileLink>
      )}
      {counter != "" && <div style={{ marginTop: 10 }}>{userName}</div>}
>>>>>>> f688640f64f9f656422ca343b965c2a6fa12b051
    </StyledHeader>
  );
}

export default Header;
