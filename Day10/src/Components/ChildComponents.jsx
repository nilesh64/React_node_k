import React from 'react'

const ChildComponents = ({name,changeparentdata}) => {
    const changedata=()=>{
        changeparentdata();
        console.log("abc");
    };
  return (
    <div>
      <h1 className='font-bold font-sans text-opacity-85 uppercase p-4 text-center text-2xl'>Name:{name}</h1>
      <button className='font-bold font-sans text-opacity-85 uppercase p-4 mx-[40rem]
      text-2xl bg-stone-500' onClick={changedata}>Change</button>
    </div>
  )
}

export default ChildComponents
