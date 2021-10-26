import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
export const LogoLink = styled(Link)`
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

export const ProfileLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  line-height: 50px;
  padding-top: 0px;
`;
