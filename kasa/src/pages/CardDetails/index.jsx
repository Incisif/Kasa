import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import { useParams, useNavigate } from 'react-router-dom'

const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function CardDetails() {
  const [data, setData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/location.json')
        const json = await response.json()
        setData(json)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const currentObject = data.find((item) => item.id === id)

  if (!currentObject) {
    navigate('/not-found')
    return null
  }

  return (
    <CardDetailsWrapper>
      <Carousel id={id} data={data} currentObject={currentObject} />
    </CardDetailsWrapper>
  )
}

export default CardDetails
