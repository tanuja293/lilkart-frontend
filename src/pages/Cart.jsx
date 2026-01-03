import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, totalPrice } =
    useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-pink-300 text-white px-2 py-1 rounded hover:bg-pink-400 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-300 text-white px-2 py-1 rounded hover:bg-red-400 transition"
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between items-center">
            <span className="font-bold">Total: ₹{totalPrice}</span>
            <button
              onClick={clearCart}
              className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-400 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
