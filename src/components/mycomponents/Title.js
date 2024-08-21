import React from 'react';
import styled from 'styled-components';
import '../../App.css'

const TitleWrapper = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 20px 0;
`;

const Title = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;
