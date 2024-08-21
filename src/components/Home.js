import React from 'react';
import Title from './mycomponents/Title';
import Description from './mycomponents/Description';
import Products from './mycomponents/Products';
import productList from './mycomponents/productList';

const Home = () => {
  return (
    <div>
      <Title>Tela de Produtos</Title>
      <Description>Confira nossa seleção de produtos abaixo:</Description>
      <Products products={productList} />
    </div>
  );
};

export default Home;
