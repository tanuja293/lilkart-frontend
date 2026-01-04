import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, getProductQty } = useContext(CartContext);
  const qty = getProductQty(product.id);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 12,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        position: "relative",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: 160,
          objectFit: "cover",
          borderRadius: 12,
        }}
      />
      {qty > 0 && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#f54242",
            color: "#fff",
            borderRadius: "50%",
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {qty}
        </div>
      )}
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
