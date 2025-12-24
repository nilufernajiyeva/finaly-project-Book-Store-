import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "../CartDrawer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </>
  );
}

export default Layout;
