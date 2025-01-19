import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const LearningApi = () => {
    const [datas , setData]=useState(null);
    useEffect(()=> {
        console.log("componentmounted");
        const FetchData = async () =>{
            try{
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/photos"
                );
                const data = await response.json();
                setData(data);
                
            }catch (error){
                console.error(error);
            }
        };
        FetchData();
    },[]);
    console.log(datas);
  return (
    <div>
      learningApi
      {
        datas && datas.slice(0,22).map((d,index)=>(
            <div  className="flex justify-evenly" key={index}>
            <h1> {d.title} </h1>
            <h2> {d.url} </h2>
          </div>

        ))
      }
    </div>
  )
}

export default LearningApi;
