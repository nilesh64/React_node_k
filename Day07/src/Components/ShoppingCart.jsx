import React from 'react';
import  {useState}  from 'react';
import product from '../utility/data';

const ShoppingCart = ({ products }) => {
  const[counts , setcount] =useState(Array(products.length).fill(0));
  const HandleIncrement =(index)=>{
    console.log(index);
    setcount((prev)=>
    prev.map((count,i)=>
    i===index? (count >=5 ?5:count+1):count
    )
    );
  };
  const HandleDecrement =(index)=>{
    setcount((prev)=>
    prev.map((count,i)=>
    i===index? (count<=0?0:count-1):count
    ));
  };
  return (
    <div className='flex justify-evenly'>
      <div className="m-2 w-100 ">
        {/* Header */}
        <div className="flex justify-between p-3 bg-red-700 w-[60rem] h-20 font-medium text-xl text-white">
          <h1>Shopping Cart</h1>
          <h1>{products.length} items</h1>
        </div>

        {/* Table Headers */}
        <div className="flex justify-between p-2 m-2 text-zinc-400">
          <h3>PRODUCT DETAILS</h3>
          <h3>QUANTITY</h3>
          <h3>PRICE</h3>
          <h3>TOTAL</h3>
        </div>

        {/* Product Rows */}
        {products.map((prod,index) => (
          <div
            key={prod.id}
            className="flex justify-between p-2 m-2 px-4 border bg-blue-200"
          >
            <div>
              <h2 className="m-1 text-xl">{prod.name}</h2>
              <h3 className="m-1 text-xl">{prod.pname}</h3>
              <button className="m-1 text-xl bg-red-600 p-1 text-white">
                Remove
              </button>
            </div>
            <div className="flex justify-between m-2 p-2 text-2xl h-10">
              <button className="p-1 "onClick={() => HandleDecrement(index)}>-</button>
              <h1 className="p-1">{counts[index]}</h1>
              <button className="p-1 "onClick={() => HandleIncrement(index)}>+</button>
            </div>
            <div className="text-xl py-4">${prod.price}</div>
            <div className="text-xl py-4">${prod.price}</div>
          </div>
        ))}

        <button className="bg-blue-400 p-2 text-white">Continue shopping</button>
      </div>

      {/* Order Summary */}
      <div className="border p-4 bg-gray-100">
        <h1 className="font-bold text-xl">Order Summary</h1>
        <div className="flex justify-between py-2">
          <h2>ITEMS ({products.length})</h2>
          <h2>
            ${products.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </h2>
        </div>
        <div className="py-2">
          <label className="block mb-2">Shipping</label>
          <select className="p-2 border rounded">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-4">
          <label htmlFor="promo" className="block mb-2">
            Promo Code
          </label>
          <input
            type="text"
            placeholder="Enter your code"
            className="p-2 border rounded w-full"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded">Apply</button>
        <div className="flex justify-between py-4 font-bold">
          <h2>TOTAL COST</h2>
          <h2>
            $
            {(
              products.reduce((total, item) => total + item.price, 0) + 10
            ).toFixed(2)}
          </h2>
        </div>
        <button className="bg-green-500 text-white p-2 rounded">CHECKOUT</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
