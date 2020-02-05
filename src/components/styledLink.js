import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    border-bottom: dotted 1px #9055a2;
  }

  @media screen and (max-width: 400px) {
    margin: 0 15px;
  }

  @media screen and (min-width: 401px) {
    margin-left: 15px;
  }

  @media screen and (min-width: 1100px) {
    margin-left: 40px;
  }
`;

export default StyledLink;
