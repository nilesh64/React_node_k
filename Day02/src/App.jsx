import React from "react"
// import ProductComponents from "./Components/ProductComponents";
// import products from "./utility/data";
import ContactComponents from "./Components/ContactComponents";
import Contacts from "./utility/data1";

const App = () => {
  return (
    <div className="flex flex-wrap">
   <ContactComponents Contact={Contacts}/>
    {/* <ProductComponents products={products}/> */}
    </div>
  )
}

export default App;
