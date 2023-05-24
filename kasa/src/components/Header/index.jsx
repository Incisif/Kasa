import redLogo from '../../assets/redLogo.png'
import styled from 'styled-components'
import StyledLink from '../../utils/style/Atoms'

const HeaderContainer = styled.header`
  display: flex;
  height: 83px;
  align-items: center;
  justify-content: space-between;
  flexdirection: row;
  margin: 0 20px 0 20px;
`
const LogoImg = styled.img`
  width: 145px;
  height: 40px;

`

function Header({ logoColor }) {
  return (
    <HeaderContainer>
      <LogoImg src={redLogo} alt="logo" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
