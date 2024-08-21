import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsComponet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ products }) => {
  return (
    <ProductsComponet>
      {products.map(product => (
        <Card 
          key={product.id} 
          title={product.title} 
          description={product.description} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </ProductsComponet>
  );
};

export default Products;
