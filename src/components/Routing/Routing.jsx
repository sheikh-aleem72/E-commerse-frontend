import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../../pages/Layouts/Layouts";
import Home from "../../pages/Home/Home";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";
import AllProduct from "../../pages/AllProduct/AllProduct";
import Collections from "../../pages/Collections/Collections";
import Cart from "../../pages/Cart/Cart";
import Product from "../Product/Product";

export default function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route
            index
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/all"
            element={
              <Suspense>
                <AllProduct />
              </Suspense>
            }
          />
          <Route
            path="/collections"
            element={
              <Suspense>
                <Collections />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/all/:id"
            element={
              <Suspense>
                <Product />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}
