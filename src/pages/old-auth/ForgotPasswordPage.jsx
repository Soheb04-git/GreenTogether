// src/pages/ForgotPasswordPage.jsx
import React, { useState } from "react";
import { requestPasswordReset } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo("");
    const token = requestPasswordReset(username.trim());
    if (!token) {
      setInfo("No user found with that username.");
      return;
    }
    // For demo we directly navigate to reset page with token.
    // In real app you would send the token by email.
    navigate(`/reset-password?token=${encodeURIComponent(token)}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Forgot password</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter your username" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Send reset link</button>
        </form>
        {info && <div className="mt-3 text-gray-700">{info}</div>}
        <div className="mt-3 text-sm text-gray-600">Note: This demo directly opens the reset page with the token.</div>
      </div>
    </div>
  );
}
