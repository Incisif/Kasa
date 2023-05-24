import styled from 'styled-components'

const CardWrapper = styled.div`
  position: relative;
  max-width: 340px;
  width: 335px;
  height: 255px;
  border-radius: 10px;
  overflow: hidden;
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
function Card({ title, picture, id }) {
  console.log(title)
  return (
    <CardWrapper key={id}>
      <CardImage src={picture} alt="Propriétés" />
      <TitleWrapper>
        <CardTitle>{title}</CardTitle>
      </TitleWrapper>
    </CardWrapper>
  )
}

export default Card
