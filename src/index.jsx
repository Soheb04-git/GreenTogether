
// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

function loadGoogleTranslate() {
  if (!document.getElementById("google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages:
          "en,hi,bn,gu,ta,te,ml,kn,mr,pa,or,ur,as,ne,si",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
}
loadGoogleTranslate();

function Root() {
  return <App />;
}

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
