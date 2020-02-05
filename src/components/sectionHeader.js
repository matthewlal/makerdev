import styled from "styled-components";

const SectionHeader = styled.h1`
  padding-top: 40px;
  font-weight: bold;
  font-size: 30px;
  color: #111;

  @media screen and (min-width: 900px) {
    font-size: 48px;
  }

  @media screen and (max-width: 900px) {
    padding-bottom: 40px;
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

export default SectionHeader;
