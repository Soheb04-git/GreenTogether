import { createContext, useState } from 'react';

export const ReportContext = createContext();

export function ReportProvider({ children }) {
  const [reports, setReports] = useState([]); // stores all submitted reports
  return (
    <ReportContext.Provider value={{ reports, setReports }}>
      {children}
    </ReportContext.Provider>
  );
}
