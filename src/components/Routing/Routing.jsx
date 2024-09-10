import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../../pages/Layouts/Layouts";
import Home from "../../pages/Home/Home";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

export default function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}
