import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const MainHeading = styled.h1`
  text-align: center;
  color: #333;
  margin-top: 2rem;
  font-size: 3rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainHeading>Career Pinnacle</MainHeading>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
