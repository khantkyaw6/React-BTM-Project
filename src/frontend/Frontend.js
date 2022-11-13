import React from 'react';
import Navigations from './Navigation';
import Header from './Header';
import Products from './Products';
import Description from './Description';
import Meat from './Meat';

const Frontend = () => {
  return (
    <div className='appContainer'>
      <Navigations />
      <Header />
      <Products />
      <Description />
      <Meat />
    </div>
  );
};

export default Frontend;
