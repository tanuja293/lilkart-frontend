import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export default function SellerOrders() {
  const { orders } = useContext(OrderContext);

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Seller Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              marginBottom: 20,
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          >
            <strong>Order ID:</strong> {order.id}
            <br />
            <strong>Items:</strong>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.qty} = ₹{item.price * item.qty}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
