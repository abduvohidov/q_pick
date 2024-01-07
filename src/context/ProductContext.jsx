import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState("");

  return (
    <ProductContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </ProductContext.Provider>
  );
};
