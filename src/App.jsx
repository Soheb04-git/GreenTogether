
// src/App.jsx
import React from "react";
import Routes from "./Routes";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { ReportProvider } from "./context/ReportContext";

function App() {
  return (

    <ReportProvider>
    <div>
      {/* Translator always visible */}
      <LanguageSwitcher />

      {/* Your app routes */}
      <Routes />
    </div>
    </ReportProvider>
  );
}

export default App;
