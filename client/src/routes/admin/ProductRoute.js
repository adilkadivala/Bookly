import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../../pages/admin/Product";

const ProductRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/product"
          element={
            <>
              <Product />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default ProductRoute;
