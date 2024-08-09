import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 150px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
  font-size: 20px;
`;

const CardButton = styled.button`
  background-color: #61dafb;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Card = ({ title, image, onClick }) => {
  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardButton onClick={onClick}>Check the ML App</CardButton>
    </CardContainer>
  );
};

export default Card;
