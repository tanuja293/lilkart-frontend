import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-pink-100 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-pink-600">
        Lil'Kart
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/products" className="hover:text-pink-500">
          Products
        </Link>
        <Link to="/cart" className="hover:text-pink-500 relative">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="/login" className="hover:text-pink-500">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
