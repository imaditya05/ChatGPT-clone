import { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [chatLog, setChatLog] = useState([]);
  const contextData = {
    chatLog,
    setChatLog,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}
