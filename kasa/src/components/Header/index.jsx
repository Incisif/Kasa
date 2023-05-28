import redLogo from '../../assets/redLogo.png'
import styled from 'styled-components'
import StyledLink from '../../utils/style/Atoms'

const HeaderContainer = styled.header`
  display: flex;
  height: 83px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 1240px;
`
const LogoImg = styled.img`
  width: 145px;
  height: 40px;
`
const NavBar = styled.nav``

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={redLogo} alt="logo" />
      <NavBar>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header
