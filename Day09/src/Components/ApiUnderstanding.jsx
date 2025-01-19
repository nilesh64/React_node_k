import React from "react";
import { useState, useEffect } from "react";

const ApiUnderstand = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState([]);
  const handelIncrement = (index) => {
    setCount((prevcount) =>
      prevcount.map((counts, i) =>
        i === index ? (counts >= 5 ? 5 : counts + 1) : counts
      )
    );
  };
  const handelDecrement = (index) => {
    setCount((prevcount) =>
      prevcount.map((counts, i) =>
        i === index ? (counts <= 0 ? 0 : counts - 1) : counts
      )
    );
  };
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const datas = await response.json();
        setData(datas);
        setCount(Array(datas.length).fill(0));
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);
  console.log(data);
  return (
    <div>
      ApiUnderstanding
      {data &&
        data.map((d, index) => (
          <div key={index} className="flex justify-evenly">
            <h1>{d.name}</h1>
            <h1>{d.username}</h1>
            <h1>{d.email}</h1>
            <h1>{d.phone}</h1>
            <h1 className="flex justify-evenly">
              <div>{d.address.street}</div>
              <div>{d.address.geo.lat}</div>
            </h1>
            <div>
              <button onClick={() => handelIncrement(index)}>+</button>
              <span>{count[index]}</span>
              <button onClick={() => handelDecrement(index)}>-</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApiUnderstand;
