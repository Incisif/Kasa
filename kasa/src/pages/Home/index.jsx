import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import banner1 from '../../assets/banner1.png'

const data = require('../../data/location.json')

const HomeWrapper = styled.div`
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1240px
  margin: 0 auto 0 auto;
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`

function Home() {
  return (
    <HomeWrapper>
      <Banner imageSrc={banner1} text={'Chez vous, partout ailleurs'} />
      <CardContainer>
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            cover={item.cover}
            id={item.id}
          />
        ))}
      </CardContainer>
    </HomeWrapper>
  )
}

export default Home
