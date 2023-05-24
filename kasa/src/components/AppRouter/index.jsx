import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';
import Footer from '../Footer';
import ResetStyles from '../../utils/style/ResetStyles';

function AppRouter() {
  return (
    <Router>
      <ResetStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;