import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../utils/style/devices'
import PropTypes from 'prop-types'

const CardWrapper = styled.div`
  position: relative;
  height: 255px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  @media ${device.tablet} {
    height: 340px;
    width: 340px;
  }
`
const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const CardTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`
const TitleWrapper = styled.div`
  position: absolute;
  color: white;
  bottom: 20px;
  left: 20px;
  width: 60%;
`
function Card({ title, cover, id }) {
  return (
    <CardWrapper key={id}>
      <Link to={`/card/${id}`}>
        <CardImage src={cover} alt="Propriétés" />
        <TitleWrapper>
          <CardTitle>{title}</CardTitle>
        </TitleWrapper>
      </Link>
    </CardWrapper>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Card
