
import logo from '../../assets/LOGO.png'
import styled from 'styled-components'
import  StyledLink  from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  display: flex;
  height: 83px;
  align-items: center;
  justify-content: space-between;
  flexdirection: row;
  margin: 0 20px 0 20px;
`
const LogoImg = styled.img`
width: 145px;
`

function Header() {
  return (
    <NavContainer>
      <LogoImg src={logo} alt="logo" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
