import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px;
`;

const Card = styled(motion.div)`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  width: 250px;
  height: 150px;
  margin: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

const HomePage = () => {
  const cardVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <CardContainer>
      <Card whileHover="hover" variants={cardVariants}>
        DSA Score Checker
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        Resume Score Checker
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        Placement Luck Predictor
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        Website Score Prediction
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        Competitive Programming Score
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        Package Prediction
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        AI Chatbot
      </Card>
      <Card whileHover="hover" variants={cardVariants}>
        Code Plagiarism Detector
      </Card>
    </CardContainer>
  );
};

export default HomePage;
