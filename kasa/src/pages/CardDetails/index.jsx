import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import { useParams, useNavigate } from 'react-router-dom'
import colors from '../../utils/style/colors'
import Collapse from '../../components/Collapse'
import { device } from '../../utils/style/devices'

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
const PropertyWrapper = styled.div`
  margin: 20px 0 0 0;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
`

const PropertyDetails = styled.div``

const DetailsTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primaryColor};
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.laptop} {
    font-size: 36px;
  }
`
const DetailsLocation = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${colors.primaryColor};
  margin-top: 5px;
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`
const TagsContainer = styled.div`
  display: flex;
  margin-top: 10px;
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
  margin: 0px 10px 0 0;
  @media ${device.tablet} {
    font-size: 12px;
    height: 22px;
    border-radius: 8px;
  }
  @media ${device.laptop} {
    font-size: 14px;
    height: 25px;
  }
`
const HostDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    margin: 0;
    align-items: flex-end;
  }
`
const HostRating = styled.div`
  position: relative;
  display: flex;
  @media ${device.tablet} {
    margin-top: 10px;
  }
`
const RatingGreyStar = styled.i`
  color: #e3e3e3;
  font-size: 13px;
  @media ${device.tablet} {
    display: flex;
    font-size: 18px;
    margin-left: 5px;
  }
`

const RatingRedStar = styled.i`
  font-size: 13px;
  color: ${colors.primaryColor};
  @media ${device.tablet} {
    font-size: 18px;
    margin-left: 5px;
  }
`
const HostInfo = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
  }
`

const HostName = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${colors.primaryColor};
  @media ${device.tablet} {
    font-size: 18px;
  }
`

const HostPicture = styled.img`
  border-radius: 50%;
  width: 32px;
  margin-left: 10px;
  @media ${device.tablet} {
    width: 64px;
  }
`
const CollapseWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 20px;
  }
`

function CardDetails() {
  const [data, setData] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/location.json')
        const json = await response.json()
        const currentObject = json.find((item) => item.id === id)
        console.log(currentObject)
        if (!currentObject) {
          navigate('/NotFound')
        } else {
          setData(currentObject)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id, navigate])

  if (!data) {
    return null
  }

  const fullName = data.host.name
  const spaceIndex = fullName.indexOf(' ')
  const firstName = fullName.substring(0, spaceIndex)
  const lastName = fullName.substring(spaceIndex + 1)

  const ratingStars = [...Array(5).keys()].map((index) => {
    if (index + 1 <= data.rating) {
      return (
        <RatingRedStar
          key={`star-${data.id}-${index}`}
          className="fa-solid fa-star"
        ></RatingRedStar>
      )
    } else {
      return (
        <RatingGreyStar
          key={`star-${data.id}-${index}`}
          className="fa-solid fa-star"
        ></RatingGreyStar>
      )
    }
  })

  return (
    <CardDetailsWrapper>
      <CarouselWrapper>
        <Carousel id={id} currentObject={data} />
      </CarouselWrapper>
      <PropertyWrapper>
        <PropertyDetails>
          <DetailsTitle>{data.title}</DetailsTitle>
          <DetailsLocation>{data.location}</DetailsLocation>
          <TagsContainer>
            {data.tags.map((tag) => {
              return <DetailsTags key={tag}>{tag}</DetailsTags>
            })}
          </TagsContainer>
        </PropertyDetails>
        <HostDetailsWrapper>
          <HostRating>{ratingStars}</HostRating>
          <HostInfo>
            <HostName>
              <div>{firstName}</div>
              <div>{lastName}</div>
            </HostName>
            <HostPicture src={data.host.picture} alt="Host" />
          </HostInfo>
        </HostDetailsWrapper>
      </PropertyWrapper>
      <CollapseWrapper>
        <Collapse title="Description" children={data.description} />
        <Collapse
          title="Equipements"
          children={data.equipments.map((equipment, index) => (
            <div key={equipment}>{equipment}</div>
          ))}
        />
      </CollapseWrapper>
    </CardDetailsWrapper>
  )
}

export default CardDetails
