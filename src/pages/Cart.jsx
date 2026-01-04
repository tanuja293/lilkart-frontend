import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const {
    cart = [],
    removeFromCart,
    updateQty,
  } = typeof window !== "undefined"
    ? useContext(CartContext)
    : { cart: [], removeFromCart: () => {}, updateQty: () => {} };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!cart || cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>🛒 Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 15 }}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
