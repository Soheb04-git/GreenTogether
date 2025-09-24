

// // src/components/ui/Header.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { getUser, getRole, logout } from "../../utils/auth";
// import logo from "assets/images/global/logo1.png";

// export default function Header() {
//   const [user, setUser] = useState(getUser());
//   const [role, setRole] = useState(getRole());
//   const navigate = useNavigate();
//   const location = useLocation();

//   // keep header in sync with localStorage
//   useEffect(() => {
//     const handler = () => {
//       setUser(getUser());
//       setRole(getRole());
//     };
//     window.addEventListener("storage", handler);
//     return () => window.removeEventListener("storage", handler);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setUser(null);
//     setRole(null);
//     navigate("/", { replace: true });
//   };

//   const roleTitles = {
//     citizen: "🚀 Your Eco-Journey Starts Here!",
//     worker: "🔍 Track, Analyze & Transform Your City",
//     volunteer: "🤝 Together for a Cleaner Tomorrow",
//     admin: "🌍 Leading India's Green Revolution",
//   };

//   // nav items per role
//   const navItems = {
//     worker: [],
//     citizen: [],
//     volunteer: [],
//     admin: [],
//   };

//   const activeClass = (p) =>
//     location.pathname === p ? "bg-green-600 text-white" : "text-gray-700 hover:text-green-600";

//   return (
//     <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
//           <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//             {/* Logo + Brand */}
//             <div 
//               className="flex items-center space-x-3 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               <img 
//                 src={logo} 
//                 alt="GreenTogether Logo" 
//                 className="h-10 w-auto object-contain"  
//               />
//               <span className="text-green-700 font-bold text-2xl">
//                 GreenTogether
//               </span>
//             </div>

//         {/* ✅ Top Center Title (dynamic by role) */}
//         <div className="hidden md:flex items-center justify-center flex-1">
//           <h1
//             className="bg-green-600 text-white px-4 py-1 rounded-md text-sm font-medium"
//             role="heading"
//             aria-level="2"
//           >
//             {roleTitles[role] ?? "🌱 Welcome to GreenTogether"} 
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           {role && navItems[role]?.map((item) => (
//             <button
//               key={item.path}
//               onClick={() => navigate(item.path)}
//               className={`px-3 py-1 rounded ${activeClass(item.path)}`}
//             >
//               {item.label}
//             </button>
//           ))}
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <>
//               {/* Avatar + role */}
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full">
//                   {user.name ? user.name.charAt(0).toUpperCase() : "U"}
//                 </div>
//                 <span className="text-gray-700 font-medium">
//                   {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
//                 </span>
//               </div>

//               {/* Logout */}
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <button onClick={() => navigate("/login")} className="text-gray-700 hover:text-green-600">
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/register")}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Start Making Impact
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


// src/components/ui/Header.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, getRole, logout } from "../../utils/auth";
import logo from "assets/images/global/logo1.png";
import Icon from "../AppIcon";

export default function Header() {
  const [user, setUser] = useState(getUser());
  const [role, setRole] = useState(getRole());
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      setUser(getUser());
      setRole(getRole());
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    setRole(null);
    navigate("/", { replace: true });
  };

  const roleTitles = {
    citizen: "🚀 Your Eco-Journey Starts Here!",
    worker: "🔍 Track, Analyze & Transform Your City",
    volunteer: "🤝 Together for a Cleaner Tomorrow",
    admin: "🌍 Leading India's Green Revolution",
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Animated Gradient Border */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-green-400 via-green-600 to-green-800 animate-gradient-x"></div>

      {/* Main Wrapper */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4 
        backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-b-2xl shadow-lg border-b border-green-200 
        transition-all duration-500">
        
        {/* Logo */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer transform hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="GreenTogether Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-md"
          />
          <span className="text-green-800 dark:text-green-400 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent animate-text-shimmer">
            GreenTogether
          </span>
        </div>

        {/* Role Title */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <h1 className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 md:px-6 py-1.5 md:py-2 
            rounded-full text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
            <span>{roleTitles[role] ?? "🌱 Welcome to GreenTogether"}</span>
            <Icon name="Sparkles" size={16} className="animate-pulse" />
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 sm:space-x-4 relative">
          {user ? (
            <div className="relative">
              {/* Avatar with glow */}
              <div
                className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center rounded-full text-sm sm:text-lg font-bold shadow-md group-hover:scale-110 transition-transform duration-200">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1 rounded-full animate-bounce">
                    {role?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden sm:inline text-gray-800 dark:text-gray-200 font-medium group-hover:text-green-700 transition-colors duration-200">
                  {role?.charAt(0).toUpperCase() + role?.slice(1)}
                </span>
                <Icon
                  name="ChevronDown"
                  size={14}
                  className={`transition-transform duration-300 ${
                    menuOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 sm:w-52 bg-white dark:bg-gray-800 shadow-xl rounded-xl border border-green-100 dark:border-gray-700 z-50 overflow-hidden animate-scale-in origin-top-right">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-red-500 hover:text-white flex items-center gap-2 text-sm sm:text-base transition-colors duration-200"
                  >
                    <Icon name="LogOut" size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="hidden sm:inline text-gray-700 dark:text-gray-200 hover:text-green-600 font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md hover:shadow-xl flex items-center space-x-1 sm:space-x-2 transition-all duration-200 text-sm sm:text-base"
              >
                <Icon name="UserPlus" size={14} /> <span>Join Us</span>
              </button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center p-2 rounded-md bg-green-100 hover:bg-green-200 transition-colors duration-200"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Icon name={mobileMenu ? "X" : "Menu"} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && !user && (
        <div className="sm:hidden absolute right-2 top-16 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-green-100 z-50 animate-fade-in">
          <button
            onClick={() => navigate("/login")}
            className="block w-full px-4 py-2 text-left hover:bg-green-100 dark:hover:bg-gray-700"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="block w-full px-4 py-2 text-left hover:bg-green-100 dark:hover:bg-gray-700"
          >
            Join Us
          </button>
        </div>
      )}
    </header>
  );
}
