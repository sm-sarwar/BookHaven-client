import React from "react";
import Navbar from "../page/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="font-mona bg-base-300 py-2 top-0 sticky z-50">
        <Navbar></Navbar>
      </nav>
      <main className="font-mona max-w-screen-xl mx-auto min-h-[400px]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
