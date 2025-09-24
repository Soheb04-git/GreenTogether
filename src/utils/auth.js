// src/utils/auth.js
// Simple demo auth + password-reset helpers using localStorage.
// Not for production.

const REGISTERED_KEY = "ww_registered";
const TOKEN_KEY = "ww_token";
const ROLE_KEY = "ww_role";
const USER_KEY = "ww_user";
const RESET_KEY = "ww_reset_tokens"; // stores array of { token, username, expires }

const DEMO_USERS = [
  { username: "citizen1", password: "pass123", role: "citizen", name: "Citizen One" },
  { username: "worker1", password: "pass123", role: "worker", name: "Worker One" },
  { username: "champion1", password: "pass123", role: "champion", name: "Champion One" },
  { username: "admin1", password: "pass123", role: "admin", name: "Admin One" }
];

// Seed demo users on first run
function seedDemoIfNeeded() {
  if (!localStorage.getItem(REGISTERED_KEY)) {
    localStorage.setItem(REGISTERED_KEY, JSON.stringify(DEMO_USERS));
  }
}
seedDemoIfNeeded();

function readRegistered() {
  return JSON.parse(localStorage.getItem(REGISTERED_KEY) || "[]");
}
function writeRegistered(arr) {
  localStorage.setItem(REGISTERED_KEY, JSON.stringify(arr));
}

// login: checks registered users list
export function login(username, password) {
  const users = readRegistered();
  const u = users.find(x => x.username === username && x.password === password);
  if (!u) return null;
  const token = btoa(`${username}:${Date.now()}`);
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify({
    username: u.username,
    name: u.name || u.username,
    role: u.role
  }));
  return { token, role: u.role, user: { username: u.username, name: u.name || u.username } };
}

// register: add to registered user list
export function register({ username, password, role = "citizen", name = "" }) {
  const users = readRegistered();
  if (users.find(u => u.username === username)) {
    return { error: "User exists" };
  }
  users.push({ username, password, role, name });
  writeRegistered(users);
  return { ok: true };
}

// Logout
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// getters
export function getRole() {
  const user = getUser();
  return user?.role || null;
}
export function getUser() {
  const r = localStorage.getItem(USER_KEY);
  return r ? JSON.parse(r) : null;
}
export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}

// Password reset: request token, verify, reset
// create token valid for 15 minutes
export function requestPasswordReset(username) {
  const users = readRegistered();
  const u = users.find(x => x.username === username);
  if (!u) return null;
  const token = btoa(`${username}:${Date.now()}:${Math.random()}`);
  const expires = Date.now() + 15 * 60 * 1000; // 15 mins
  const tokens = JSON.parse(localStorage.getItem(RESET_KEY) || "[]");
  tokens.push({ token, username, expires });
  localStorage.setItem(RESET_KEY, JSON.stringify(tokens));
  return token;
}

export function verifyResetToken(token) {
  const tokens = JSON.parse(localStorage.getItem(RESET_KEY) || "[]");
  const t = tokens.find(x => x.token === token);
  if (!t) return null;
  if (Date.now() > t.expires) return null;
  return t.username;
}

export function resetPassword(token, newPassword) {
  const tokens = JSON.parse(localStorage.getItem(RESET_KEY) || "[]");
  const t = tokens.find(x => x.token === token);
  if (!t) return { error: "Invalid token" };
  if (Date.now() > t.expires) return { error: "Token expired" };

  const users = readRegistered();
  const u = users.find(x => x.username === t.username);
  if (!u) return { error: "User not found" };
  u.password = newPassword;
  writeRegistered(users);

  // remove used token
  const remaining = tokens.filter(x => x.token !== token);
  localStorage.setItem(RESET_KEY, JSON.stringify(remaining));
  return { ok: true };
}
