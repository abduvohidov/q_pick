import { createContext, useEffect, useState } from "react";

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
  const [selectedID, setSelectedID] = useState('');

  return (
    <SelectedContext.Provider value={{ selectedID, setSelectedID }}>
      {children}
    </SelectedContext.Provider>
  );
};
