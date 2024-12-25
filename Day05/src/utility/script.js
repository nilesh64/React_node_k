// import products from "./data.js";
import products from './../../../Day05/src/utility/data.js';


// const product_data = products.map((product) => ({
//     productName: product.productName,
//     productReviews: product.productReviews.map((review) =>
//         {
//             const reviewText = review.productReview || "";
//             return reviewText.split("!" && "," && ".")[0].trim() + ".";
//           }),
//   }));
  
//   console.log(product_data);


  // const product_data = products.map((product) => ({
  //   productName: product.productName,
  //   productReviews: product.productReviews.map((review) => {
  //     const firstSentence = review.productReview.split(".")[0].trim(); // Extract first sentence
  //     return firstSentence + "."; // Add period if needed
  //   })
  // }));
  
  // console.log(product_data);
const product_data = products.map((product)=>
({
    productName:product.productName,
    productReviews:product.productReviews.map((review) =>
    review.productReview ),
}
));

console.log(product_data);


// product.productName.map((item)=>({
//     category:product.category, item:item,
//    } ))
//     // category: product.category,
//     // item:product.productName,
// ));