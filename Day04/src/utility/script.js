import products from './data.js'
// console.log(products);
// const p =products.map((product)=> ({category: product.category}));
// console.log(p);
  
// const p =products.map((product)=>{
//     let category = product.category;
//     let items = product.productName;
//     return {category,items};
// });  
// console.log(p);

const productcat = products.map((product)=>(
    product.productName.map((item)=>({
    category:product.category, item:item,
   } ))
    // category: product.category,
    // item:product.productName,
));
console.log(productcat);