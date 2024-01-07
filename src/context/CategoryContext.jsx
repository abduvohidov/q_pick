import { createContext } from "react";
import { useState, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(localStorage.getItem('category') || 'All');

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
