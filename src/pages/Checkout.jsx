import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!name || !address || !phone) return alert("Fill all fields!");

    setLoading(true);
    setTimeout(() => {
      placeOrder(cart);
      clearCart();
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    }, 2000);
  };

  if (!cart || cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: 50 }}>
        🛒 Your cart is empty
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 25,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Checkout</h2>
      <p>Total: ₹{total}</p>

      {success ? (
        <h3 style={{ color: "green", textAlign: "center" }}>
          ✅ Payment Successful!
        </h3>
      ) : (
        <form onSubmit={handlePlaceOrder}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Processing Payment..." : "Place Order"}
          </button>
        </form>
      )}
    </div>
  );
}
