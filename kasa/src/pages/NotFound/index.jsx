import React from 'react'
import styled from 'styled-components'
import StyledLink from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import { device } from '../../utils/style/devices'

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
`

const NotFoundTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NotFound404 = styled.p`
  color: ${colors.primaryColor};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  margin:bottom: 11px;
  @media ${device.tablet} {
    font-size: 200px;
  }
  @media ${device.laptop} {
    font-size: 263px;
  }
`
const NotFoundText = styled.p`
  color: ${colors.primaryColor};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 133px;
  @media ${device.tablet} {
    font-size: 25px;
  }
  @media ${device.laptop} {
    font-size: 36px;
  }
`
function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundTextContainer>
        <NotFound404>404</NotFound404>
        <NotFoundText>
          Oups! La page que vous demandez n'existe pas.
        </NotFoundText>
        <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
      </NotFoundTextContainer>
    </NotFoundWrapper>
  )
}

export default NotFound
