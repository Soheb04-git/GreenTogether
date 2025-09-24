// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, login } from "../utils/auth";

const roleToRoute = {
  citizen: "/gamified-learning-portal",
  worker: "/smart-monitoring-hub",
  champion: "/community-action-center",
  admin: "/impact-visualization-dashboard"
};

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Username and password required");
      return;
    }
    const r = register({ username: username.trim(), password, role, name });
    if (r?.error) {
      setError("User already exists. Try logging in.");
      return;
    }
    // auto-login after register
    const logged = login(username.trim(), password);
    if (logged) {
      const dest = roleToRoute[role] || "/";
      navigate(dest, { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name (optional)" className="w-full p-2 border rounded" />
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Choose username" className="w-full p-2 border rounded" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Choose password" className="w-full p-2 border rounded" />
          <select value={role} onChange={e=>setRole(e.target.value)} className="w-full p-2 border rounded">
            <option value="citizen">Citizen</option>
            <option value="worker">Waste Worker</option>
            <option value="champion">Green Champion</option>
          </select>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Register</button>
        </form>
        {error && <div className="mt-3 text-red-600">{error}</div>}
      </div>
    </div>
  );
}
