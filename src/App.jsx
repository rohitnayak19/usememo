import React from 'react'
import Products from './Products';

const App = () => {
  const products = [
    { id: 1, name: 'Nike Air Max', price: 120 },
    { id: 2, name: 'Adidas Ultraboost', price: 180 },
    { id: 3, name: 'Puma RS-X', price: 100 },
    { id: 4, name: 'Reebok Classic', price: 85 },
    { id: 5, name: 'New Balance 574', price: 90 },
    { id: 6, name: 'Asics Gel Lyte III', price: 130 },
    { id: 7, name: 'Vans Old Skool', price: 60 },
    { id: 8, name: 'Converse Chuck Taylor', price: 55 },
    { id: 9, name: 'Under Armour HOVR Phantom', price: 160 },
    { id: 10, name: 'Saucony Jazz', price: 75 },
  ];
  return (
    <>
      <Products products={products} />
    </>
  )
}

export default App