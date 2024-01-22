import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../pages/admin/Category";

const CategoryRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/category"
          element={
            <>
              <Category />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default CategoryRoute;
