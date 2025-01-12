import React, { useState } from "react";

const CardComponent = ({ contacts }) => {
    let cart = [];
    let wishlist = [];

    const [productList, setProductList] = useState(contacts);
    const [snackbar, setSnackbar] = useState({ show: false, message: "", success: true });  

    const showSnackbar = (success, message) => {
        setSnackbar({ show: true, message, success });
        setTimeout(() => {
            setSnackbar({ show: false, message: "", success: true });
        }, 3000);
    };

    const handleAddToCart = (product) => {
        if (wishlist.some((item) => item.id === product.id)) {
            console.log("Product Already added to cart !", cart);
            showSnackbar(false, "Product Already added to Cart ");
        } else {
            product.isCart = true;
            cart.push(product);
            console.log("Added to cart:", cart);
            console.log("Productssss:", productList);
            setProductList([...productList]); 
            showSnackbar(true, "Added to Cart:");
        }
    };

    const handleAddToWishlist = (product) => {
        if (wishlist.some((item) => item.id === product.id)) {
            console.log("Product Already added to wishlist !", wishlist);
            showSnackbar(false, "Product Already added to wishlist ");
        } else {
            product.isWishlist = true;
            wishlist.push(product);
            console.log("Added to wishlist:", wishlist);
            console.log("Productssss:", productList);
            setProductList([...productList]);  
            showSnackbar(true, "Added to wishlist:");
        }
    };

    const handleRemoveFromCart = (product) => {
        if (productList.some((item) => item.id === product.id)) {
            product.isCart = false;
            cart.pop(product);
            console.log("Removed from Cart:", cart);
            console.log("Productssss:", productList);
            setProductList([...productList]);  
            showSnackbar(true, "Removed from Cart");
        } else {
            console.log("Product Already Removed !", wishlist);
            showSnackbar(false, "Product Already Removed");
        }
    };

 
    const handleRemoveFromWishlist = (product) => {
        if (productList.some((item) => item.id === product.id)) {
            product.isWishlist = false;
            wishlist.pop(product);
            console.log("Removed from wishlist:", wishlist);
            console.log("Productssss:", productList);
            setProductList([...productList]); 
            showSnackbar(true, "Removed from wishlist");
        } else {
            console.log("Product Already Removed !", wishlist);
            showSnackbar(false, "Product Already Removed");
        }
    };

    return (
        <div className="relative">
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {productList.map((product) => (
                    <div
                        key={product.id}
                        className="w-[20rem] bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    >
                        <img
                            className="w-full h-44 object-contain bg-white"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-purple-800 mb-2">
                                {product.name}
                            </h2>
                            <p className="text-sm text-gray-700 mb-3">
                                {product.productdesc}
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-bold text-purple-900">
                                    {product.price}
                                </span>
                                <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-sm font-medium">
                                    ⭐ {product.rating}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 rounded-lg text-center hover:from-purple-700 hover:to-purple-500 transition-all duration-300"
                                    onClick={() => {
                                        product.isCart === true
                                            ? handleRemoveFromCart(product)
                                            : handleAddToCart(product);
                                    }}
                                >
                                   {product.isCart === true
                                        ? "Remove from Cart"
                                        : "Add to Cart"}
                                </button>
                                <button
                                    className="flex-1 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 py-2 rounded-lg text-center hover:from-gray-400 hover:to-gray-300 transition-all duration-300"
                                    onClick={() => {
                                        product.isWishlist === true
                                            ? handleRemoveFromWishlist(product)
                                            : handleAddToWishlist(product);
                                    }}
                                >
                                    {product.isWishlist === true
                                        ? "Remove from Wishlist"
                                        : "Add to Wishlist"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                 
                {snackbar.show && (
                    <div
                        className={`fixed top-4 right-4 px-8 py-4 text-xl rounded-lg shadow-lg text-white transition-all animate-bounce duration-300 ease-in-out transform ${
                            snackbar.success ? "bg-green-500" : "bg-red-500"
                        } ${snackbar.show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                    >
                        {snackbar.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardComponent;