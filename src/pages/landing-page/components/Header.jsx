// //src/pages/landing-page/cmponents/Header.jsx


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "assets/images/global/logo1.png";

// export default function Header() {
//   const navigate = useNavigate();
  
//   return (
//     <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo + Brand */}
//         <div 
//           className="flex items-center space-x-3 cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           <img 
//             src={logo} 
//             alt="GreenTogether Logo" 
//             className="h-10 w-auto object-contain"  
//           />
//           <span className="text-green-700 font-bold text-2xl">
//             GreenTogether
//           </span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <a href="#how-it-works" className="hover:text-green-600">
//             How It Works
//           </a>
//           <a href="#impact" className="hover:text-green-600">
//             Our Impact
//           </a>
//           <a href="#communities" className="hover:text-green-600">
//             Communities
//           </a>
//           <a href="#about" className="hover:text-green-600">
//             About
//           </a>
//         </nav>

//         {/*  Right Buttons styled better */}
//         <div className="flex items-center space-x-4">
//           <button 
//             onClick={() => navigate("/login")}
//             className="text-gray-700 font-medium hover:text-green-600 transition-colors"
//           >
//             Login
//           </button>
//           <button 
//             onClick={() => navigate("/register")}
//             className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
//           >
//             🌱 Start Making Impact
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


// src/pages/landing-page/components/Header.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/global/logo1.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo + Brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="GreenTogether Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-green-700 font-bold text-xl sm:text-2xl">
            GreenTogether
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#how-it-works" className="hover:text-green-600 transition-colors">
            How It Works
          </a>
          <a href="#impact" className="hover:text-green-600 transition-colors">
            Our Impact
          </a>
          <a href="#communities" className="hover:text-green-600 transition-colors">
            Communities
          </a>
          <a href="#about" className="hover:text-green-600 transition-colors">
            About
          </a>
        </nav>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-4 sm:px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            🌱 Start Making Impact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-4 pt-4 pb-6 flex flex-col space-y-4 animate-fadeIn">
          <a
            href="#how-it-works"
            className="text-gray-700 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#impact"
            className="text-gray-700 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            Our Impact
          </a>
          <a
            href="#communities"
            className="text-gray-700 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            Communities
          </a>
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="text-gray-700 font-medium hover:text-green-600"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/register");
                setMenuOpen(false);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              🌱 Start Making Impact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
