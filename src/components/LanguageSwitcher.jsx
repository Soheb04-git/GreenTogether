

// // src/components/LanguageSwitcher.jsx
// import React, { useState, useRef, useEffect } from "react";

// const LANGUAGES = [
//   { code: "en", name: "English" },
//   { code: "hi", name: "Hindi" },
//   { code: "bn", name: "Bengali" },
//   { code: "gu", name: "Gujarati" },
//   { code: "ta", name: "Tamil" },
//   { code: "te", name: "Telugu" },
//   { code: "ml", name: "Malayalam" },
//   { code: "kn", name: "Kannada" },
//   { code: "mr", name: "Marathi" },
//   { code: "pa", name: "Punjabi" },
//   { code: "or", name: "Odia" },
//   { code: "ur", name: "Urdu" },
//   { code: "as", name: "Assamese" },
//   { code: "ne", name: "Nepali" },
//   { code: "si", name: "Sinhala" },
// ];

// export default function LanguageSwitcher() {
//   const [selectedLang, setSelectedLang] = useState("en");
//   const [open, setOpen] = useState(false);
//   const boxRef = useRef(null);

//   const changeLanguage = (code) => {
//     setSelectedLang(code);
//     setOpen(false);

//     const googleSelect = document.querySelector(".goog-te-combo");
//     if (googleSelect) {
//       googleSelect.value = code;
//       googleSelect.dispatchEvent(new Event("change"));
//     }
//   };

//   // close dropdown when clicking outside
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (boxRef.current && !boxRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   return (
//     <div className="translator-box" ref={boxRef}>
//       🌐 <span className="translator-label">Change Language:</span>
//       <button
//         onClick={() => setOpen(!open)}
//         className="translator-btn"
//       >
//         {LANGUAGES.find((l) => l.code === selectedLang)?.name}
//         <span style={{ fontSize: "12px" }}>{open ? "▲" : "▼"}</span>
//       </button>

//       {open && (
//         <div className="translator-menu">
//           {LANGUAGES.map((lang) => (
//             <button
//               key={lang.code}
//               onClick={() => changeLanguage(lang.code)}
//               className={`translator-item ${
//                 selectedLang === lang.code ? "selected" : ""
//               }`}
//             >
//               {lang.name}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Hidden Google widget (required for engine) */}
//       <div id="google_translate_element" style={{ display: "none" }} />
//     </div>
//   );
// }


// src/components/LanguageSwitcher.jsx
import React, { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "gu", name: "Gujarati" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" },
  { code: "kn", name: "Kannada" },
  { code: "mr", name: "Marathi" },
  { code: "pa", name: "Punjabi" },
  { code: "or", name: "Odia" },
  { code: "ur", name: "Urdu" },
  { code: "as", name: "Assamese" },
  { code: "ne", name: "Nepali" },
  { code: "si", name: "Sinhala" },
];

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const changeLanguage = (code) => {
    setSelectedLang(code);
    setOpen(false);

    const googleSelect = document.querySelector(".goog-te-combo");
    if (googleSelect) {
      googleSelect.value = code;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Mouse events for dragging
  const onMouseDown = (e) => {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    };
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      left: e.clientX - dragOffset.current.x,
      top: e.clientY - dragOffset.current.y,
    });
  };
  const onMouseUp = () => setDragging(false);

  // Touch events for mobile dragging
  const onTouchStart = (e) => {
    setDragging(true);
    const touch = e.touches[0];
    dragOffset.current = {
      x: touch.clientX - position.left,
      y: touch.clientY - position.top,
    };
  };
  const onTouchMove = (e) => {
    if (!dragging) return;
    e.preventDefault(); // Prevent page scrolling while dragging
    const touch = e.touches[0];
    setPosition({
      left: touch.clientX - dragOffset.current.x,
      top: touch.clientY - dragOffset.current.y,
    });
  };
  const onTouchEnd = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  });

  return (
    <div
      ref={boxRef}
      className="translator-box fixed z-50 w-44 sm:w-52 cursor-move select-none"
      style={{ top: position.top, left: position.left }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow-2xl p-2 sm:p-3 transform transition-transform duration-300 hover:scale-105">
        {/* Drag handle */}
        <span className="mr-2 text-lg animate-bounce cursor-grab">☰</span>
        🌐
        <span className="translator-label ml-1 sm:ml-2 font-semibold tracking-wide">
          Lang:
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="translator-btn flex items-center justify-between ml-auto bg-white text-gray-800 font-medium px-3 py-1 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200 hover:scale-105"
        >
          {LANGUAGES.find((l) => l.code === selectedLang)?.name}
          <span className="ml-1 text-xs">{open ? "▲" : "▼"}</span>
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="translator-menu absolute left-0 right-0 bg-white border rounded-xl shadow-2xl mt-2 z-50 max-h-60 overflow-y-auto text-sm animate-fadeIn">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`translator-item w-full text-left px-3 py-1 mb-0.5 hover:bg-green-100 hover:scale-105 transition-all duration-200 ${
                selectedLang === lang.code ? "bg-green-200 font-semibold" : ""
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {/* Hidden Google widget */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
}
