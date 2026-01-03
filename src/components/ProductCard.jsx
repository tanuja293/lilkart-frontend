import React from "react";

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-pink-500 font-bold">₹{product.price}</p>
      <button
        onClick={onAdd}
        className="mt-2 bg-pink-300 text-white px-3 py-1 rounded hover:bg-pink-400 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
