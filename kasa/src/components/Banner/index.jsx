import bannerImg from '../../assets/banner.png'
import styled from 'styled-components'

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 111px;
  border-radius: 10px;
  overflow: hidden;
`;

const BannerImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(2);
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); 
`;

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
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerImg src={bannerImg} alt="logo" />
      <BannerOverlay />
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerContainer>
  );
}

export default Banner;