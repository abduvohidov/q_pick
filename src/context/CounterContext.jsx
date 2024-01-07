import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(
    localStorage.getItem("countLike") || 0
  );
  const [counterCart, setCounterCart] = useState(
    localStorage.getItem("counterCart") || 0
  );

  useEffect(() => {
    localStorage.setItem("countLike", counter);
    localStorage.setItem("counterCart", counterCart);
  }, [counter]);

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, counterCart, setCounterCart }}
    >
      {children}
    </CounterContext.Provider>
  );
};
