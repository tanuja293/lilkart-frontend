import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // get product id from URL
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCart();

  if (!product)
    return <h2 className="text-center mt-10">Product not found!</h2>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md pastel-card">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold pastel-text">{product.name}</h1>
            <p className="text-xl mt-4 pastel-text">₹{product.price}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 py-3 px-6 bg-pastel-purple text-white font-semibold rounded-lg hover:bg-pastel-pink transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
