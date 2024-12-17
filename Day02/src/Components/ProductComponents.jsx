import React from 'react'

const ProductComponents = (props) => {
  return (
    <>
    {props.products.map((product) =>(
             <div className="w-24 h-20 bg-slate-600 m-4 rounded-2xl">
        <h1 className="text-[0.3rem] text-white px-5  ">Product Lisrting</h1>
        <img  className="w-20 h-10 rounded-2xl mx-2 my-1" src={product.image}
          alt="img.jpg"
        />
        <p className="text-[0.3rem] text-white px-5">{product.productdesc}</p>
        <div className="flex space-x-3">
          <button className="text-[0.5rem] bg-black text-white w-7 rounded h-3 mx-1 ">Add</button>
          <button className="text-[0.5rem] bg-black text-white w-10 rounded h-3 mx-1">Remove</button>
        </div>
             </div>
    ))} 
    </>
  );
};

export default ProductComponents
