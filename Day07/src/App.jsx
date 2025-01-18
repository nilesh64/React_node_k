import React from 'react'
import ShoppingCart from './Components/ShoppingCart';
import product from './utility/data';
const App = () => {
  return (
    <div>
      <ShoppingCart products={product}/>
    </div>
  )
}

export default App;
