import React from 'react'
import styled from 'styled-components'
import StyledLink from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 58px;
  text-align: center;
  height: 100vh;
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
  
`
const NotFoundText = styled.p`
  color: ${colors.primaryColor};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 133px;
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
