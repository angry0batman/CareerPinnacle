import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const Home = () => {
  const handleCardClick = (toolName) => {
    alert(`Navigating to ${toolName}...`);
    // Add logic for navigation or further actions
  };

  return (
    <HomeContainer>
      <Card
        title="DSA Score Checker"
        image="https://miro.medium.com/v2/resize:fit:1400/0*Rhu1FRkUGZFAeGIy"
        onClick={() => handleCardClick('DSA Score Checker')}
      />
      <Card
        title="Resume Score Checker"
        image="https://d1civoyjepycei.cloudfront.net/static/img/meta/meta-analytics.115b05c7850e.png"
        onClick={() => handleCardClick('Resume Score Checker')}
      />
      <Card
        title="Placement Luck Predictor"
        image="https://measiim.edu.in/myweb/uploads/2022/05/placement.jpg"
        onClick={() => handleCardClick('Placement Luck Predictor')}
      />
      <Card
        title="Website Score Prediction"
        image="https://www.hubspot.com/hubfs/how-much-website-cost_0.webp"
        onClick={() => handleCardClick('Website Score Prediction')}
      />
      <Card
        title="Competitive Programming Score"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpU_Phi7mT5sMAOJBFz8Erv7mqBNaepzFNQ&s"
        onClick={() => handleCardClick('Competitive Programming Score')}
      />
      <Card
        title="Package Prediction"
        image="https://www.bankrate.com/2023/09/15163502/what-is-fiat-money.jpeg"
        onClick={() => handleCardClick('Package Prediction')}
      />
      <Card
        title="ML Score Prediction"
        image="https://internx.in/wp-content/uploads/2024/02/Machine-Learning.jpg"
        onClick={() => handleCardClick('AI Chatbot')}
      />
      <Card
        title="Code Plagiarism Detector"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbvQH_zCsxFLXg1vttXw1aHQRU3JVzBOLm6ZECZS52gMLRO_zNjOLgase3uWqdvLMrlo&usqp=CAU"
        onClick={() => handleCardClick('Code Plagiarism Detector')}
      />
    </HomeContainer>
  );
};

export default Home;
