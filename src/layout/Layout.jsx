import { Outlet } from "react-router-dom";
import { useContext } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";

export default function Layout() {
    const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className={`bg-${theme}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
