import styled from 'styled-components'
import whiteLogo from '../../assets/whiteLogo.png'
import { device } from '../../utils/style/devices'


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 225px;
  background-color: black;
  margin-top: 2rem;
  
`
const LogoImg = styled.img`
  width: 122px;
  height: 40px;
  margin-top: 2rem;
`
const FooterText = styled.p`
color: white;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
margin-top: 2rem;
@media ${device.tablet} {
  font-size: 16px;
}
@media ${device.laptop} {
  font-size: 24px;
}
`

function Footer() {
  return (
    <FooterContainer>
      <LogoImg src={whiteLogo} alt="logo" />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  )
}
export default Footer
