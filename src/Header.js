import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 220px 1fr 200px;
  grid-column-gap: 20px;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 50px;
  line-height: 30px;
  padding: 0px 15px;
  svg{
      margin-top: 10px
      display: inline-block;
      float:left;
      padding-top: 7px
  }
  span{
      display: inline-block;
      padding-left: 5px;
      padding-top: 10px;
      font-size: 1.2rem;
      font-weight: 300;
  }
  b {
    font-weight: bold;
    display: inline-block;
    margin-left: 3px;
  }
`;

const ProfileLink = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 50px;
  padding-top: 0px;
`;

const SearchInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #777;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px 10px;
  margin-top: 9px;
`;

function Header() {
  return (
    <StyledHeader>
      <LogoLink href="" className="logo">
        <FontAwesomeIcon icon={faGripLinesVertical} size="2x" />
        <span>
          Queue<b>overflow</b>
        </span>
      </LogoLink>
      <form action="" className="search">
        <SearchInput type="text" placeholder="Search..."></SearchInput>
      </form>
      <ProfileLink href="" className="profile">
        JoJo
      </ProfileLink>
    </StyledHeader>
  );
}

export default Header;
