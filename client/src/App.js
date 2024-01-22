import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashboardRoute from "./routes/admin/DashboardRoute";
import CategoryRoute from "./routes/admin/CategoryRoute";
import ProductRoute from "./routes/admin/ProductRoute";
import PublicRoute from "./routes/public/PublicRoute";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* middiater */}
    

        <DashboardRoute />
        <CategoryRoute />
        <ProductRoute />
        {/* public */}

        <PublicRoute />

      </BrowserRouter>
    </>
  );
};

export default App;
