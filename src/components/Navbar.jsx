import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Get user info from localStorage
  const isAuth =
    typeof window !== "undefined"
      ? localStorage.getItem("isAuth") === "true"
      : false;
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") || "" : "";
  const name =
    typeof window !== "undefined" ? localStorage.getItem("userName") || "" : "";

  // Total items in cart
  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);

  const logout = () => {
    if (typeof window !== "undefined") localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        background: "#e6ddff",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo / Home */}
      <Link
        to="/"
        style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#333" }}
      >
        Lil’Kart
      </Link>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {isAuth && role === "customer" && (
          <>
            <Link to="/products" style={{ fontWeight: "500" }}>
              Products
            </Link>
            <Link to="/cart" style={{ fontWeight: "500" }}>
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </>
        )}

        {isAuth && role === "seller" && (
          <>
            <Link to="/seller" style={{ fontWeight: "500" }}>
              Dashboard
            </Link>
            <Link to="/seller/orders" style={{ fontWeight: "500" }}>
              Orders
            </Link>
          </>
        )}
      </div>

      {/* User / Auth Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {isAuth ? (
          <>
            <span style={{ fontWeight: "500" }}>Hi, {name}!</span>
            <button
              onClick={logout}
              style={{
                background: "#f8c8dc",
                padding: "6px 12px",
                borderRadius: 10,
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            style={{
              fontWeight: "500",
              background: "#f8c8dc",
              padding: "6px 12px",
              borderRadius: 10,
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
