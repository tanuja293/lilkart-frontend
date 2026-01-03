import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-pink-600">
        Welcome to Lil'Kart
      </h1>
      <p className="mb-4 text-gray-700 text-center max-w-md">
        Explore our amazing pastel-themed products and add them to your cart!
      </p>
      <Link
        to="/products"
        className="bg-pink-300 text-white px-6 py-2 rounded hover:bg-pink-400 transition"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
