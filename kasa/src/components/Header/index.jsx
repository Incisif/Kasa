import { NavLink } from 'react-router-dom'
import redLogo from '../../assets/redLogo.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/devices'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 1240px;
`

const LogoImg = styled.img`
  width: 145px;
  height: auto;
  margin: 20px 0;
  @media ${device.tablet} {
    width: 180px;
    margin: 40px 0;
  }
`

const NavBar = styled.nav``

const StyledNavLink = styled(NavLink)`
  color: ${colors.primaryColor};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-left: 10px;
  &.active {
    border-bottom: 2px solid ${colors.primaryColor};
  }
  @media ${device.tablet} {
    font-size: 18px;
    margin-left: 35px;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={redLogo} alt="logo" />
      <NavBar>
        <StyledNavLink exact="true" to="/">
          ACCEUIL
        </StyledNavLink>
        <StyledNavLink exact="true" to="/about">
          A PROPOS
        </StyledNavLink>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header
