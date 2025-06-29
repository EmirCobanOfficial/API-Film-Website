import React from "react";
import { NavLink, Outlet } from "react-router";
import App from "../App";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
