import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../../pages/Home'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'
import Footer from '../Footer'
import ResetStyles from '../../utils/style/ResetStyles'
import CardDetails from '../../pages/CardDetails'
import styled from 'styled-components'
import { device } from '../../utils/style/devices'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  @media ${device.tablet} {
    margin: 0 30px;
  }
`

function AppRouter() {
  return (
    <Router>
      <AppContainer>
        <ResetStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card/:id" element={<CardDetails />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  )
}

export default AppRouter
