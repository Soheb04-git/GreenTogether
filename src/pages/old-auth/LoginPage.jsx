// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const roleToRoute = {
  citizen: "/gamified-learning-portal",
  //worker: "/smart-monitoring-hub",
  worker: "/worker-portal",
  champion: "/community-action-center",
  admin: "/impact-visualization-dashboard"
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const res = login(username.trim(), password);
    if (!res) {
      setError("Invalid credentials. Try demo users shown below or register.");
      return;
    }
    const dest = roleToRoute[res.role] || "/";
    navigate(dest, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full p-2 border rounded" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Login</button>
        </form>
        {error && <div className="mt-3 text-red-600">{error}</div>}
        <div className="mt-4 text-sm text-gray-600">
          Demo users: citizen1 / pass123 · worker1 / pass123 · champion1 / pass123 · admin1 / pass123
        </div>
        <div className="mt-3 text-right">
          <a href="/forgot-password" className="text-sm text-green-600">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
