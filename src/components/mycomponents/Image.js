import React from 'react';
import styled from 'styled-components';

const ImageComponet = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Image = ({ src, alt }) => {
  return <ImageComponet src={src} alt={alt} />;
};

export default Image;
