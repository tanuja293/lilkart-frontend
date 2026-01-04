import { useState } from "react";

export default function SellerDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!name || !price || !image) return alert("All fields are required!");

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
    };

    const existing =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("sellerProducts") || "[]")
        : [];
    const updated = [...existing, newProduct];

    localStorage.setItem("sellerProducts", JSON.stringify(updated));

    setName("");
    setPrice("");
    setImage("");
    setSuccess("Product added successfully ✅");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 20,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2>Seller Dashboard</h2>

      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <h3 style={{ marginTop: 20 }}>Your Products:</h3>
      {typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("sellerProducts") || "[]").map((p) => (
          <div key={p.id} style={{ marginTop: 10 }}>
            <strong>{p.name}</strong> - ₹{p.price}
          </div>
        ))}
    </div>
  );
}
