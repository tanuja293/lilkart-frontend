import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("customer"); // default role
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email) return alert("Please fill all fields");

    // Save details to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("role", role);
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
    }

    alert(`Welcome ${name}! Logged in as ${role}`);
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "60px auto",
        padding: 30,
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Login</h2>

      <form onSubmit={handleLogin}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </label>

        <button type="submit" style={{ marginTop: 15, width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
}
