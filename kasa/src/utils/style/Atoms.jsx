import colors from "./colors";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
color: ${colors.primaryColor};
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-left: 10px;
`

export default StyledLink;