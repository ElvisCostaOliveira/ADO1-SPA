import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import '../../App.css'

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 200px;
  margin: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardWrapper>
      <Image src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;
