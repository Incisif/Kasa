import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import { useParams, useNavigate } from 'react-router-dom'
import colors from '../../utils/style/colors'
import Collapse from '../../components/Collapse'

const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`
const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const DetailsTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primaryColor};
  margin-top: 15px;
`
const DetailsLocation = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${colors.primaryColor};
  margin-top: 15px;
`
const TagsContainer = styled.div`
  display: flex;
`

const DetailsTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  background-color: ${colors.primaryColor};
  border-radius: 5px;
  color: ${colors.white};
  padding: 5px 10px;
  height: 18px;
  margin: 15px 10px 0 0;
`
const HostDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`
const HostRating = styled.div`
  position: relative;
`
const RatingGreyStar = styled.i`
  color: #e3e3e3;
  font-size: 13px;
`
const RatingRedStar = styled.i`
position: absolute;
font-size: 13px;
color: ${colors.primaryColor};`
 

const HostInfo = styled.div`
  display: flex;
`

const HostName = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${colors.primaryColor};
`

const HostPicture = styled.img`
  border-radius: 50%;
  width: 32px;
  margin-left: 10px;
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

  useEffect(() => {
    if (data.length > 0) {
      const currentObject = data.find((item) => item.id === id)
      if (!currentObject) {
        navigate('/NotFound')
      }
    }
  }, [data, id, navigate])

  if (data.length === 0) {
    return null
  }

  const currentObject = data.find((item) => item.id === id)

  if (!currentObject) {
    navigate('/NotFound')
    return null
  }

  const fullName = currentObject.host.name
  const spaceIndex = fullName.indexOf(' ')
  const firstName = fullName.substring(0, spaceIndex)
  const lastName = fullName.substring(spaceIndex + 1)

  const ratingStars = Array.from({length: currentObject.rating}).fill(null)

  return (
    <CardDetailsWrapper>
      <CarouselWrapper>
        <Carousel id={id} data={data} currentObject={currentObject} />
      </CarouselWrapper>
      <DetailsTitle>{currentObject.title}</DetailsTitle>
      <DetailsLocation>{currentObject.location}</DetailsLocation>
      <TagsContainer>
        {currentObject.tags.map((tag) => {
          return <DetailsTags key={tag}>{tag}</DetailsTags>
        })}
      </TagsContainer>
      <HostDetailsWrapper>
        <HostRating>
          <RatingGreyStar>
            <i className="fa-solid fa-star"></i>
          </RatingGreyStar>
          <RatingGreyStar>
            <i className="fa-solid fa-star"></i>
          </RatingGreyStar>
          <RatingGreyStar>
            <i className="fa-solid fa-star"></i>
          </RatingGreyStar>
          <RatingGreyStar>
            <i className="fa-solid fa-star"></i>
          </RatingGreyStar>
          <RatingGreyStar>
            <i className="fa-solid fa-star"></i>
          </RatingGreyStar>
        </HostRating>
        <RatingRedStar>
          {ratingStars.map((index) => (
            <i key={index} className="fa-solid fa-star"></i>
          ))}
        </RatingRedStar>
        <HostInfo>
          <HostName>
            <div>{firstName}</div>
            <div>{lastName}</div>
          </HostName>
          <HostPicture
            src={currentObject.host.picture}
            alt={currentObject.host.name}
          />
        </HostInfo>
      </HostDetailsWrapper>
      <Collapse title={`Description`}>{currentObject.description}</Collapse>
      <Collapse title={`Équipements`}>
        <ul>
          {currentObject.equipments.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </Collapse>
    </CardDetailsWrapper>
  )
}

export default CardDetails
