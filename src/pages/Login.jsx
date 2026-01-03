import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="mb-2 p-2 border rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 border rounded w-64"
      />
      <button className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-400 transition">
        Login
      </button>
    </div>
  );
};

export default Login;
