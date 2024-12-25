import React from "react";
import products from "./utility/data";

const App = () => {
  const product_data = products.map((product) => ({
    productName: product.productName,
    productReviews: product.productReviews.map(
      (review) => review.productReview
    ),
  }));
  return (
    <div className="m-3 w-full h-full">
      <div className=" mx-2 px-20 text-[0.70rem] font-bold  bg-slate-400  text-amber-300">
        Product Reviews
      </div>
      <div className="my-3 ">
        {product_data.map((prod) => (
          <div className="flex flex-wrap m-2  bg-slate-400">
            <div className="text-[0.50rem] text-amber-300 px-2">
              {prod.productName}
            </div>
            <div className="text-[0.3rem] p-2 ">{prod.productReviews}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
