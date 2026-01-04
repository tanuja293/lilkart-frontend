import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SellerDashboard from "./pages/SellerDashboard";
import SellerOrders from "./pages/SellerOrders";

export default function App() {
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") || "" : "";
  const isAuth =
    typeof window !== "undefined"
      ? localStorage.getItem("isAuth") === "true"
      : false;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/seller"
          element={
            role === "seller" ? <SellerDashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/seller/orders"
          element={
            role === "seller" ? <SellerOrders /> : <Navigate to="/login" />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
