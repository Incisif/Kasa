import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import banner1 from '../../assets/banner1.png'

const HomeWrapper = styled.div`
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
  max-width: 1240px;
  width: 100%;
`

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/location.json');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
