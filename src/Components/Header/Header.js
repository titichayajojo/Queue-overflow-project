import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { ProfileLink, LogoLink } from "../Link/Link";
import { StyledHeader } from "../Header/HeaderStyle";
import { SearchInput } from "../Input/Inputs";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <LogoLink to="/LoginPage">
        <FontAwesomeIcon
          icon={faGripLinesVertical}
          size="2x"
          style={{ marginRight: 10 }}
        />
        <span>
          Queue<b>overflow</b>
        </span>
      </LogoLink>
      <form action="" className="search">
        <SearchInput
          type="text"
          placeholder="Search..."
          style={{ backgroundColor: "white" }}
        ></SearchInput>
      </form>
      <ProfileLink to="/LoginPage">Login</ProfileLink>
    </StyledHeader>
  );
}

export default Header;
