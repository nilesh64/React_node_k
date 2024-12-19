import React from 'react'
import items from './../utility/data';

const ItemList = ({items}) => {
  return (
      <>
{items.map((item)=>(  <div className='bg-slate-300 w-28 h-14 flex relative top-3 mb-2 mx-3 '>
    <div className='bg-slate-600 p-2 text-center py-4 text-white'>{item.id}</div>
    <div className='text-[0.5rem] '>
        <p className='font-bold px-2'>{item.name}</p>
        <h1 className='font-light text-[0.4rem] p-1'>{item.description}</h1>
        <h2 className='px-4'>{item.category}</h2>
    </div>
  </div>
  ))} 
    </>
  )
}

export default ItemList
