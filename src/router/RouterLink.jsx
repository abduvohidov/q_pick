import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Selected from "../pages/Selected";
import Carts from "../pages/Cart";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import SingleProduct from "../pages/SingleProduct";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
import Error from "../pages/Error";

export default function RouterLink() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products/:id/order" element={<Order />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}
