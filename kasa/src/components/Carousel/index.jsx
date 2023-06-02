import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../utils/style/devices'
import PropTypes from 'prop-types'

const CarouselWrapper = styled.div`
  position: relative;
  height: 255px;
  width: 100%;
  max-width: 1240px;
  border-radius: 10px;
  overflow: hidden;
  @media ${device.tablet} {
    height: 335px;
  }
  @media ${device.laptop} {
    height: 415px;
  }
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
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 4rem;
  }
`

const RightArrow = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 4rem;
  }
`

const SlideNumberWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  display: none;
  @media ${device.mobileL} {
    display: block;
  }
`

function Carousel({ currentObject }) {
  console.log(currentObject);

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
Carousel.propTypes = {
  currentObject: PropTypes.object.isRequired
}

export default Carousel
