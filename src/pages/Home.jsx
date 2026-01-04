export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "linear-gradient(120deg,#dff5ea,#e6ddff)",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: 20 }}>
        Welcome to Lil’Kart 🛍️
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 30 }}>
        Your one-stop marketplace for pastel goodies! Shop, sell, and enjoy a
        colorful shopping experience.
      </p>
      <a
        href="/products"
        style={{
          padding: "12px 20px",
          borderRadius: 12,
          background: "#f8c8dc",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          fontWeight: "bold",
        }}
      >
        Explore Products
      </a>
    </div>
  );
}
