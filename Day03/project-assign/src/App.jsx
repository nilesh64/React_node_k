import React from 'react'
import ItemList from './Components/ItemList';
import items from './utility/data';

const App = () => {
  return (
    <div className='bg-green-200 w-full h-full flex flex-wrap'>
    <ItemList items ={items}/>
    </div>
  )
}

export default App;

