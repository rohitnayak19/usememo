import React, { useMemo, useState } from 'react'


const Products = ({ products }) => {
  const [sortType, setSortType] = useState('name');

  const calculateTotalPrice = () => {
    console.log("Calculating total price...");
    return products.reduce((acc, products) => acc + products.price, 0)
  }

  const totalPrice = useMemo(calculateTotalPrice, [products])

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price
  });

  return (
    <>
      <ul className='ml-5'>
        {sortedProducts.map((p, i) => (
          <li className=' border-b p-2 w-72 cursor-pointer transition-transform duration-200 hover:scale-105' key={p.id}> <span className='italic'>{i + 1}</span> {p.name} <strong>{p.price}$</strong></li>
        ))}
      </ul>

      <h1>Total cart price : {totalPrice}</h1>
      <button className='p-2 bg-slate-500 mx-2 text-white rounded-sm font-semibold transition duration-200 hover:bg-slate-600' onClick={() => setSortType('name')}>Sort by Name</button>
      <button className='p-2 bg-slate-500 mx-2 text-white rounded-sm font-semibold transition duration-200 hover:bg-slate-600' onClick={() => setSortType('price')}>Sort by price</button>
    </>
  )
}

export default Products