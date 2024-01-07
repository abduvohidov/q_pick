import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguagesProvider } from "./context/LanguageContext";
import { CounterProvider } from "./context/CounterContext";
import { CategoryProvider } from "./context/CategoryContext";
import { FormProvider } from "./context/FormContext";
import { SelectedProvider } from "./context/SelectedContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/ItemCart";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./pages/Cart/Carts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <LanguagesProvider>
        <CounterProvider>
          <CategoryProvider>
            <FormProvider>
              <SelectedProvider>
                <ProductProvider>
                  <CartProvider>
                    <Provider store={store}>
                      <App />
                    </Provider>
                  </CartProvider>
                </ProductProvider>
              </SelectedProvider>
            </FormProvider>
          </CategoryProvider>
        </CounterProvider>
      </LanguagesProvider>
    </ThemeProvider>
  </BrowserRouter>
);
