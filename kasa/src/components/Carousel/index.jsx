import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const data = require('../../data/location.json')

const CarouselWrapper = styled.div`
  position: relative;
  height: 255px;
  width: 100%;
  max-width: 1240px;
  border-radius: 10px;
  overflow: hidden;
`

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LeftArrow = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

const RightArrow = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

const SlideNumberWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 50%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`

function Carousel() {
  const { id } = useParams()
  const currentObject = data.find((item) => item.id === id)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === currentObject.pictures.length - 1 ? 0 : prevSlide + 1
    )
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? currentObject.pictures.length - 1 : prevSlide - 1
    )
  }

  return (
    <CarouselWrapper>
      <LeftArrow onClick={handlePrevSlide}>
        <i className="fa-sharp fa-solid fa-chevron-left"></i>
      </LeftArrow>
      <RightArrow onClick={handleNextSlide}>
        <i className="fa-sharp fa-solid fa-chevron-right"></i>
      </RightArrow>
      <CarouselImg
        src={currentObject?.pictures[currentSlide]}
        alt={`Slide ${currentSlide}`}
      />

      <SlideNumberWrapper>
        {currentSlide + 1} / {currentObject?.pictures.length || 0}
      </SlideNumberWrapper>
    </CarouselWrapper>
  )
}

export default Carousel
