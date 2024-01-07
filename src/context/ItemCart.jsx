import { createContext, useState } from "react";

export const CartItem = createContext();

export const CartProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState([]);

  return (
    <CartItem.Provider value={{ itemCart, setItemCart }}>
      {children}
    </CartItem.Provider>
  );
};
