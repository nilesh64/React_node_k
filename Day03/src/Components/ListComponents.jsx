import React from "react";
const ListComponents = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div className="h-10 w-20 bg-red-500 mx-2 flex relative top-1 mb-2">
          <div className="bg-white p-2 text-[0.8rem]">{category.id}</div>
          <div className={`${category.bgcolor} w-full`}>
            <h1 className="px-1 text-[0.6rem]">{category.name}</h1>
            <div className="text-[0.3rem]  font-light p-1 flex  flex-wrap gap-1">
              {category.items.map((x)=>(
                <div>{x}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default ListComponents;
