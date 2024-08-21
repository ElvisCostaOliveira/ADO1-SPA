import React from 'react';
import styled from 'styled-components';

const TitleComponet = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 20px 0;
`;

const Title = ({ children }) => {
  return <TitleComponet>{children}</TitleComponet>;
};

export default Title;
