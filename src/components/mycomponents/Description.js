import React from 'react';
import styled from 'styled-components';
import '../../App.css'

const DescriptionWrapper = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Description = ({ children }) => {
  return <DescriptionWrapper>{children}</DescriptionWrapper>;
};

export default Description;
