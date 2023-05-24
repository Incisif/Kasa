import React from 'react'
import styled from 'styled-components'
import Collapse from '../../components/Collapse'
import banner2 from '../../assets/banner2.png'
import Banner from '../../components/Banner'

const AboutWrapper = styled.div`
  height: 100vh;
  margin: 0 20px;
`

function About() {
  return (
    <AboutWrapper>
      <Banner imageSrc={banner2} />
      <Collapse title={`Fiabilité`}>
        Les annonces postées sur kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Collapse>
      <Collapse title={`Respect`}>
        La bienveillance fait partie des valeurs fondatrices de kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Collapse>
      <Collapse title={`Service`}>
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </Collapse>
      <Collapse title={`Sécurité`}>
        La sécurité est la priorité de kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers de
        sensibilisation à la sécurité domestique pour nos hôtes.
      </Collapse>
    </AboutWrapper>
  )
}
export default About
