import styled from 'styled-components'
import { device } from '../../utils/style/devices'
import PropTypes from 'prop-types'

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 111px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  max-width: 1240px;
  @media ${device.tablet} {
    height: 223px;
  }
`

const BannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(2);
`

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`

const BannerText = styled.p`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  margin: 0 4rem 0 0;
`

function Banner({ imageSrc, text, height }) {
  return (
    <BannerContainer style={{ height: height }}>
      <BannerImg src={imageSrc} alt="Bannière" />
      <BannerOverlay />
      <BannerText>{text}</BannerText>
    </BannerContainer>
  )
}
Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string,
  height: PropTypes.string
}

export default Banner
