import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

const data = require('../../data/location.json')

const HomeWrapper = styled.div`
  margin: 0 20px 0 20px;
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;`

function Home() {
  return <HomeWrapper>
    <Banner />
    <CardContainer>
    {data.map((item)=> <Card key={item.id} title={item.title} picture={item.cover} />)}
    </CardContainer>
  </HomeWrapper>
}

export default Home
