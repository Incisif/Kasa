import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'

const HomeWrapper = styled.div`
  margin: 0 20px 0 20px;
`
function Home() {
  return <HomeWrapper>
    <Banner />
  </HomeWrapper>
}

export default Home
