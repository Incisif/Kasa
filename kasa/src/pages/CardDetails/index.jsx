import React from 'react'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'


const CardDetailsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 20px;`
function CardDetails() {
  return (
    <CardDetailsWrapper>
      <Carousel />
    </CardDetailsWrapper>
  )
}
export default CardDetails
