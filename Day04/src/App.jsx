import React from "react";
import products from "./utility/data";

const App = () => {
  const productcat = products.flatMap((product) =>
    product.productName.map((item) => ({
      category: product.category,
      item: item,
    }))
  );
  console.log(productcat);

  return (
    <div className="text-[0.3rem] font-normal ">
      <h1 className="text-[0.6rem] font-semibold p-1">Product Category</h1>
<div className="flex flex-wrap cursor-pointer ">
      {productcat.map((prod) => (
        <div className="flex w-16 h-3  m-1 p-[0.05rem] bg-stone-300  flex-wrap">
          <div className="p-[0.15rem] ">{prod.category}</div>
          <div className="p-[0.15rem]">{prod.item}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default App;
