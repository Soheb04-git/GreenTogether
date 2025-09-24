// src/pages/ResetPasswordPage.jsx
import React, { useEffect, useState } from "react";
import { verifyResetToken, resetPassword } from "../utils/auth";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ResetPasswordPage() {
  const q = useQuery();
  const token = q.get("token");
  const [validUser, setValidUser] = useState(null);
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setInfo("Invalid reset link.");
      return;
    }
    const username = verifyResetToken(token);
    if (!username) {
      setInfo("Invalid or expired token.");
      return;
    }
    setValidUser(username);
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) return setInfo("Enter a new password.");
    const res = resetPassword(token, password);
    if (res?.error) return setInfo(res.error);
    // redirect to login after successful reset
    navigate("/login");
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
        {info && <div className="mb-3 text-red-600">{info}</div>}
        {validUser ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="text-sm text-gray-700">Resetting password for <strong>{validUser}</strong></div>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="New password" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Set new password</button>
          </form>
        ) : (
          <div className="text-gray-600">Checking reset link...</div>
        )}
      </div>
    </div>
  );
}
