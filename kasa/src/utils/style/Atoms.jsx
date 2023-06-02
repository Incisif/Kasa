import colors from "./colors";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { device } from "./devices";

const StyledLink = styled(Link)`
color: ${colors.primaryColor};
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-left: 10px;
text-decoration: underline;
@media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`

export default StyledLink;