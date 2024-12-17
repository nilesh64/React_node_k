import React from "react"
import ProductComponents from "./Components/ProductComponents";
import products from "./utility/data";

const App = () => {
  return (
    <div className="flex flex-wrap">
    <ProductComponents products={products}/>
    </div>
  )
}

export default App;
