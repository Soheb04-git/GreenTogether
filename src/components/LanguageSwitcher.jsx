

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

  const changeLanguage = (code) => {
    setSelectedLang(code);
    setOpen(false);

    const googleSelect = document.querySelector(".goog-te-combo");
    if (googleSelect) {
      googleSelect.value = code;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="translator-box" ref={boxRef}>
      🌐 <span className="translator-label">Change Language:</span>
      <button
        onClick={() => setOpen(!open)}
        className="translator-btn"
      >
        {LANGUAGES.find((l) => l.code === selectedLang)?.name}
        <span style={{ fontSize: "12px" }}>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="translator-menu">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`translator-item ${
                selectedLang === lang.code ? "selected" : ""
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {/* Hidden Google widget (required for engine) */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
}
