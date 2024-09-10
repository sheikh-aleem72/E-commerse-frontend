import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <>
      <Carousel />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
